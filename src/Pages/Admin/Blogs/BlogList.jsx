import { Button, Flex, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, getBlogs } from '../../../Features/Blog/BlogSlice'
import CustomModal from '../../../Components/Admin/CustomModal'
import { storage_url } from '../../../Utils/baseUrl'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BlogList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [blogId, setBlogId] = useState('')

  const { blogs, isLoading } = useSelector(state => state.blog)

  const items = [
    {
      title: 'Blogs',
    },
  ]

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  const fetchData = () => {
    dispatch(getBlogs(tableParams))
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
    if (blogs?.data) {
      setTableParams(prev => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          total: blogs.data.total,
          current: blogs.data.current_page,
        },
      }))
    }
  }, [blogs])

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    })
  }

  const handleEdit = record => {
    navigate(`/admin/blogs/${record.id}`)
  }
  const handleDelete = record => {
    showModal(record.id)
  }

  const showModal = e => {
    setOpen(true)
    setBlogId(e)
  }

  const hideModal = () => {
    setOpen(false)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: true,
      width: '10%',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      sorter: true,
      width: '30%',
      render: (text, record) => (
        <LazyLoadImage
          src={`${storage_url}/${record.image}`}
          alt={record.title}
          effect="blur"
          width={'100%'}
          height={'auto'}
        />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      sorter: true,
      width: '30%',
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

  const deleteABlog = e => {
    dispatch(deleteBlog(e))

    setOpen(false)
    setTimeout(() => {
      dispatch(getBlogs())
    }, 100)
  }

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Blogs</h3>
      <Flex justify="space-between">
        <Button type="primary" onClick={() => navigate('/admin/blogs/create')}>
          Add Blog
        </Button>
      </Flex>
      <div>
        <Table
          columns={columns}
          rowKey={record => record.id}
          dataSource={blogs?.data?.data}
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
            deleteABlog(blogId)
          }}
          title="Are you sure you want to delete this?"
        />
      </div>
    </Space>
  )
}

export default BlogList
