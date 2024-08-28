import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Flex, Space, Table } from 'antd'
import BreadCrumbCus from '../../../Components/Admin/BreadCrumbCus'
import {
  deleteProduct,
  getProducts,
} from '../../../Features/Product/ProductSlice'
import CustomModal from '../../../Components/Admin/CustomModal'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { storage_url } from '../../../Utils/baseUrl'

const ProductList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [productId, setProductId] = useState('')

  const { products, isLoading } = useSelector(state => state.product)

  const items = [
    {
      title: 'Products',
    },
  ]

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

  const handleEdit = record => {
    navigate(`/admin/products/${record.id}`)
  }
  const handleDelete = record => {
    showModal(record.id)
  }

  const showModal = e => {
    setOpen(true)
    setProductId(e)
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
      title: 'Image',
      dataIndex: 'image',
      sorter: false,
      width: '30%',
      render: (text, record) => {
        return (
          <LazyLoadImage
            src={`${storage_url}/${record.images[0].image}`}
            alt={record.title}
            effect="blur"
            width={200}
            height={200}
          />
        )
      },
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
      sorter: false,
      width: '20%',
      render: (text, record) => {
        return record.category.name
      },
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
            deleteAProduct(productId)
          }}
          title="Are you sure you want to delete this?"
        />
      </div>
    </Space>
  )
}

export default ProductList
