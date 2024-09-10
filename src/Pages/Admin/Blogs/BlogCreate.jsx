import { Button, Form, Input, Space } from 'antd'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  createNewBlog,
  getBlog,
  resetState,
  updateBlog,
} from '../../../Features/Blog/BlogSlice'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import './BlogCreate.scss'
import { storage_url } from '../../../Utils/baseUrl'
import MyEditor from '../../../Components/MyEditor/MyEditor'

const BlogCreate = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const items = useMemo(() => [
    {
      href: '/admin/blogs',
      title: 'Blogs',
    },
    {
      title: id !== undefined ? 'Edit' : 'Add',
    },
  ], [id]);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getBlog(id))
    } else {
      dispatch(resetState())
    }
  }, [id])

  const {
    isSuccess,
    isError,
    isLoading,
    createdBlog,
    updatedBlog,
    blogTitle,
    blogContent,
    blogAuthor,
    blogImage,
    blogSlug,
    metaTitle,
    metaDescription,
    metaKeyword,
    blogSummary,
  } = useSelector(state => state.blog)

  const [previewImage, setPreviewImage] = useState(
    blogImage ? `${storage_url}/${blogImage}` : null
  )
  useEffect(() => {
    setPreviewImage(blogImage ? `${storage_url}/${blogImage}` : null)
  }, [blogImage])

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success('Blog Added Successfullly!')
      navigate('/admin/blogs')
      dispatch(resetState())
    }
    if (isSuccess && updatedBlog) {
      toast.success('Blog Updated Successfullly!')
      navigate('/admin/blogs')
      dispatch(resetState())
    }
    if (isError) {
      toast.error('Something Went Wrong!')
    }
  }, [isSuccess, isError, isLoading])

  const schema = useMemo(() => yup.object().shape({
    title: yup.string().required('Title is Required'),
    summary: yup.string().required('Summary is Required'),
    slug: yup.string().required('Slug is Required'),
    content: yup.string().required('Content is Required'),
    author: yup.string().required('Author is Required'),
    image: id !== undefined
      ? yup.mixed().nullable().test('fileSize', 'File too large', value =>
        !value || !(value instanceof FileList) || (value[0] && value[0].size <= 2097152)
      ).test('fileFormat', 'Unsupported Format', value =>
        !value || !(value instanceof FileList) || (value[0] && ['image/jpg', 'image/jpeg', 'image/png'].includes(value[0].type))
      )
      : yup.mixed().required('Image is Required').test('fileSize', 'File too large', value =>
        !value || !(value instanceof FileList) || (value[0] && value[0].size <= 2097152)
      ).test('fileFormat', 'Unsupported Format', value =>
        !value || !(value instanceof FileList) || (value[0] && ['image/jpg', 'image/jpeg', 'image/png'].includes(value[0].type))
      ),
  }), [id])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogTitle || '',
      slug: blogSlug || '',
      summary: blogSummary || '',
      content: blogContent || '',
      author: blogAuthor || '',
      image: null,
      meta_title: metaTitle || '',
      meta_description: metaDescription || '',
      meta_keyword: metaKeyword || '',
    },
    validationSchema: schema,
    onSubmit: values => {
      const formData = new FormData()

      formData.append('title', values.title)
      formData.append('slug', values.slug)
      formData.append('summary', values.summary)
      formData.append('content', values.content)
      formData.append('author', values.author)
      formData.append('meta_title', values.meta_title)
      formData.append('meta_description', values.meta_description)
      formData.append('meta_keyword', values.meta_keyword)

      // Add image to formData
      if (values.image && values.image.length > 0) {
        // Assuming that the image is stored as a File object in `values.image`
        formData.append('image', values.image[0])
      }

      if (id !== undefined) {
        formData.append('id', id)
        dispatch(updateBlog({ id: id, data: formData }))
      } else {
        dispatch(createNewBlog(formData))
        formik.resetForm()
      }
    },
  })

  const removeVietnameseTones = useCallback((str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .trim()
  }, [])

  const generateSlug = useCallback((title) => {
    return removeVietnameseTones(title)
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
  }, [removeVietnameseTones])

  const handleTitleChange = useCallback((e) => {
    const { value } = e.target
    formik.setFieldValue('title', value)
    formik.setFieldValue('slug', generateSlug(value))
  }, [generateSlug, formik])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">{id !== undefined ? 'Edit' : 'Add'} Blog</h3>

      <Form onFinish={formik.handleSubmit} layout="vertical" className='form-create'>
        <Form.Item
          label={t('blog.title')}
          required
          validateStatus={
            formik.errors.title && formik.touched.title ? 'error' : ''
          }
          help={
            formik.errors.title && formik.touched.title
              ? formik.errors.title
              : ''
          }
        >
          <Input
            name="title"
            value={formik.values.title}
            onChange={handleTitleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item
          label={t('blog.slug')}
          required
          validateStatus={
            formik.errors.slug && formik.touched.slug ? 'error' : ''
          }
          help={
            formik.errors.slug && formik.touched.slug
              ? formik.errors.slug
              : ''
          }
        >
          <Input
            name="slug"
            value={formik.values.slug}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item
          label={t('blog.author')}
          required
          validateStatus={
            formik.errors.author && formik.touched.author ? 'error' : ''
          }
          help={
            formik.errors.author && formik.touched.author
              ? formik.errors.author
              : ''
          }
        >
          <Input
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item
          label={t('blog.summary')}
          required
          validateStatus={
            formik.errors.summary && formik.touched.summary ? 'error' : ''
          }
          help={
            formik.errors.summary && formik.touched.summary
              ? formik.errors.summary
              : ''
          }
        >
          <Input
            name="summary"
            value={formik.values.summary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item
          label={t('blog.content')}
          required
          validateStatus={
            formik.errors.content && formik.touched.content ? 'error' : ''
          }
          help={
            formik.errors.content && formik.touched.content
              ? formik.errors.content
              : ''
          }
        >
          <MyEditor
            name="content"
            onChange={formik.handleChange('content')}
            value={formik.values.content}
          />
        </Form.Item>

        <Form.Item
          label={t('blog.image')}
          required
          validateStatus={
            formik.errors.image && formik.touched.image ? 'error' : ''
          }
          help={
            formik.errors.image && formik.touched.image
              ? formik.errors.image
              : ''
          }
        >
          <input
            type="file"
            name="image"
            onChange={e => {
              if (e.target.files && e.target.files[0]) {
                let img = URL.createObjectURL(e.target.files[0])
                setPreviewImage(img)
              } else {
                // If user deletes the current image without choosing a new one
                setPreviewImage(null)
              }
              formik.setFieldValue('image', e.target.files)
            }}
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              width={'50%'}
              style={{ marginTop: '1rem' }}
            />
          )}
        </Form.Item>

        <div className="seo">
          <h2 className="seo-title">SEO</h2>
          <Form.Item
            label={t('blog.meta_title')}
            validateStatus={
              formik.errors.meta_title && formik.touched.meta_title
                ? 'error'
                : ''
            }
            help={
              formik.errors.meta_title && formik.touched.meta_title
                ? formik.errors.meta_title
                : ''
            }
          >
            <Input
              name="meta_title"
              value={formik.values.meta_title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label={t('blog.meta_description')}
            validateStatus={
              formik.errors.meta_description &&
                formik.touched.meta_description
                ? 'error'
                : ''
            }
            help={
              formik.errors.meta_description &&
                formik.touched.meta_description
                ? formik.errors.meta_description
                : ''
            }
          >
            <Input
              name="meta_description"
              value={formik.values.meta_description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label={t('blog.meta_keyword')}
            validateStatus={
              formik.errors.meta_keyword && formik.touched.meta_keyword
                ? 'error'
                : ''
            }
            help={
              formik.errors.meta_keyword && formik.touched.meta_keyword
                ? formik.errors.meta_keyword
                : ''
            }
          >
            <Input
              name="meta_keyword"
              value={formik.values.meta_keyword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
        </div>

        <Button type="primary" htmlType="submit" disabled={isLoading}>
          Submit
        </Button>
      </Form>

    </Space>
  )
}

export default BlogCreate
