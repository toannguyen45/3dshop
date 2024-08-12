import { Button, Flex, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { useNavigate } from 'react-router-dom'
import { getCategories } from '../../../Features/Category/CategorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { formatDateTimeFull } from '../../../Utils/formatDate'

const List = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { categories, isLoading } = useSelector(state => state.category)

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  const fetchData = () => {
    dispatch(getCategories(tableParams))
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
    if (categories?.data) {
      setTableParams(prev => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          total: categories.data.total,
          current: categories.data.current_page,
        },
      }))
    }
  }, [categories])

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
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: true,
      width: '20%',
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Category</h3>
      <Flex justify="space-between">
        <Button
          type="primary"
          onClick={() => navigate('/admin/categories/create')}
        >
          Add Category
        </Button>
      </Flex>
      <div>
        <Table
          columns={columns}
          rowKey={record => record.id}
          dataSource={categories?.data?.data}
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
