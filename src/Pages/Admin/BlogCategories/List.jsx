import { Button, Flex, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import qs from 'qs'
import BreadcrumbCus from '@components/Admin/Breadcrumb-cus'
import { useNavigate } from 'react-router-dom'

const List = () => {
  const navigate = useNavigate()

  const items = [
    {
      title: 'Blog Categories',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        {
          text: 'Male',
          value: 'male',
        },
        {
          text: 'Female',
          value: 'female',
        },
      ],
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ]
  const getRandomuserParams = params => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  })

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })
  const fetchData = () => {
    setLoading(true)
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`
    )
      .then(res => res.json())
      .then(({ results }) => {
        setData(results)
        setLoading(false)
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        })
      })
  }
  useEffect(() => {
    fetchData()
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize])
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([])
    }
  }

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadcrumbCus items={items} />
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
          rowKey={record => record.login.uuid}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
    </Space>
  )
}

export default List
