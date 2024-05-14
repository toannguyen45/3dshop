import { Button, Flex, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'

const List = () => {
  const navigate = useNavigate()

  const items = [
    {
      title: 'Blog',
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Blog Category</h3>
      <Flex justify="space-between">
        <Button type="primary" onClick={() => navigate('/admin/blogs/create')}>
          Add Blog
        </Button>
      </Flex>
      <div></div>
    </Space>
  )
}

export default List
