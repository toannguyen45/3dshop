import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Flex, Space, Table } from 'antd'
import BreadCrumbCus from '../../../Components/Admin/BreadCrumbCus'
import { getProducts } from '../../../Features/Product/ProductSlice'
import CustomModal from '../../../Components/Admin/CustomModal'

const List = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    filters: {},
    sortField: null,
    sortOrder: null,
  })

  const { products, isLoading } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortField: sorter.field,
      sortOrder: sorter.order,
    })
    dispatch(getProducts(tableParams))
  }

  const handleEdit = record => {
    navigate(`/admin/products/${record.id}`)
  }
  const handleDelete = record => {
    showModal(record.id)
  }

  const showModal = e => {
    setOpen(true)
    setCateId(e)
  }

  const hideModal = () => {
    setOpen(false)
  }

  const deleteAProduct = e => {
    dispatch(deleteProduct(e))

    setOpen(false)
  }

  const items = [
    {
      title: 'Products',
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
      title: 'Category',
      dataIndex: 'category',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
      ),
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Products</h3>
      <Flex justify="space-between">
        <Button
          type="primary"
          onClick={() => navigate('/admin/products/create')}
        >
          Add Product
        </Button>
      </Flex>
      <div>
        <Table
          columns={columns}
          rowKey={record => record.id}
          dataSource={products?.data?.data}
          loading={isLoading}
          pagination={{
            ...tableParams.pagination,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20'],
          }}
          onChange={handleTableChange}
        />
        <CustomModal
          hideModal={hideModal}
          open={open}
          performAction={() => {
            deleteAProduct(cateId)
          }}
          title="Are you sure you want to delete this?"
        />
      </div>
    </Space>
  )
}

export default List
