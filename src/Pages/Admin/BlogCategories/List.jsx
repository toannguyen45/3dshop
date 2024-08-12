import { Button, Flex, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import qs from 'qs'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { useNavigate } from 'react-router-dom'
import { getBlogCategories } from '../../../Features/BlogCategory/BlogCategorySlice'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { blogCategories, isLoading } = useSelector(state => state.blogCategory)

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  const fetchData = () => {
    dispatch(getBlogCategories(tableParams))
  }

  useEffect(() => {
    fetchData()
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ])

  useEffect(() => {
    if (blogCategories?.data) {
      setTableParams(prev => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          total: blogCategories.data.total,
          current: blogCategories.data.current_page,
        },
      }))
    }
  }, [blogCategories])

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    })
  }

  const items = [
    {
      title: 'Blog Categories',
    },
  ]

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      sorter: true,
    },
    {
      title: 'Updated At',
      dataIndex: 'updated_at',
      sorter: true,
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Blog Category</h3>
      <Flex justify="space-between">
        <Button
          type="primary"
          onClick={() => navigate('/admin/blog-categories/create')}
        >
          Add Blog Category
        </Button>
      </Flex>
      <div>
        <Table
          columns={columns}
          rowKey={record => record.id}
          dataSource={blogCategories?.data?.data}
          pagination={{
            ...tableParams.pagination,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20'],
          }}
          loading={isLoading}
          onChange={handleTableChange}
        />
      </div>
    </Space>
  )
}

export default List
