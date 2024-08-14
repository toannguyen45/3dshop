import { Button, Flex, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { useNavigate } from 'react-router-dom'
import {
  getProducts,
  deleteProduct,
} from '../../../Features/Product/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import CustomModal from '../../../Components/Admin/CustomModal'

const List = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [cateId, setCateId] = useState('')

  const { products, isLoading } = useSelector(state => state.product)

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  const fetchData = () => {
    dispatch(getProducts(tableParams))
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
    if (products?.data) {
      setTableParams(prev => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          total: products.data.total,
          current: products.data.current_page,
        },
      }))
    }
  }, [products])

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
      title: 'Products',
    },
  ]

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

  const deleteAProduct = e => {
    dispatch(deleteProduct(e))

    setOpen(false)
    setTimeout(() => {
      dispatch(getProducts())
    }, 100)
  }

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
          pagination={{
            ...tableParams.pagination,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20'],
          }}
          loading={isLoading}
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
