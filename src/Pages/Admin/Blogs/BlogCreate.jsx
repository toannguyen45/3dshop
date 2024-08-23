import { Button, Form, Input, Select, Space } from 'antd'
import React, { useEffect } from 'react'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { useTranslation } from 'react-i18next'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
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
import { getBlogCategories } from '../../../Features/BlogCategory/BlogCategorySlice'
import UploadFile from '../../../Components/Admin/UploadFile'
import { toast } from 'react-toastify'
import './BlogCreate.scss'

const BlogCreate = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const items = [
    {
      href: '/admin/blogs',
      title: 'Blogs',
    },
    {
      title: id !== undefined ? 'Edit' : 'Add',
    },
  ]

  useEffect(() => {
    dispatch(getBlogCategories())
  }, [])

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
    blogCategory,
    blogSlug,
    metaTitle,
    metaDescription,
    metaKeyword,
    blogSummary,
  } = useSelector(state => state.blog)

  const { blogCategories } = useSelector(state => state.blogCategory)

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

  let schema = yup.object().shape({
    title: yup.string().required('Title is Required'),
    summary: yup.string().required('Summary is Required'),
    slug: yup.string().required('Slug is Required'),
    content: yup.string().required('Content is Required'),
    author: yup.string().required('Author is Required'),
    category: yup.string().required('Category is Required'),
  })

  console.log(blogTitle, blogContent, blogAuthor, blogImage)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogTitle || '',
      slug: blogSlug || '',
      summary: blogSummary || '',
      content: blogContent || '',
      author: blogAuthor || '',
      image: null,
      category: blogCategory ? String(blogCategory) : null,
      meta_title: metaTitle || '',
      meta_description: metaDescription || '',
      meta_keyword: metaKeyword || '',
    },
    validationSchema: schema,
    onSubmit: values => {
      if (id !== undefined) {
        const data = { id: id, data: values }
        dispatch(updateBlog(data))
      } else {
        const formData = new FormData()

        formData.append('title', values.title)
        formData.append('slug', values.slug)
        formData.append('summary', values.summary)
        formData.append('content', values.content)
        formData.append('author', values.author)
        formData.append('category_id', values.category)
        formData.append('meta_title', values.meta_title)
        formData.append('meta_description', values.meta_description)
        formData.append('meta_keyword', values.meta_keyword)

        // Add image to formData
        if (values.image && values.image.length > 0) {
          // Assuming that the image is stored as a File object in `values.image`
          formData.append('image', values.image[0].originFileObj)
        }

        dispatch(createNewBlog(formData))
        formik.resetForm()
      }
    },
  })

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Add Blog</h3>
      <div>
        <Form onFinish={formik.handleSubmit} layout="vertical">
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
              onChange={formik.handleChange}
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
          <Form.Item label={t('blog.category')}>
            <Select
              placeholder="Select a option and change input text above"
              name="category"
              onChange={formik.handleChange('category')}
              onBlur={formik.handleBlur('category')}
              value={formik.values.category}
            >
              <Select.Option value="male">Select option</Select.Option>
              {blogCategories?.data?.data.map((item, j) => {
                return (
                  <Select.Option key={j} value={String(item?.id)}>
                    {item.title}
                  </Select.Option>
                )
              })}
            </Select>
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
            <ReactQuill
              theme="snow"
              className="react-quill"
              name="content"
              onChange={formik.handleChange('content')}
              value={formik.values.content}
              modules={{
                toolbar: [
                  [{ font: [] }],
                  [{ size: ['small', false, 'large', 'huge'] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ color: [] }, { background: [] }],
                  [{ script: 'sub' }, { script: 'super' }],
                  [{ header: '1' }, { header: '2' }],
                  ['blockquote', 'code-block'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  [{ indent: '-1' }, { indent: '+1' }],
                  [{ direction: 'rtl' }],
                  [{ align: [] }],
                  ['link', 'image', 'video'],
                  ['clean'],
                ],
              }}
            />
          </Form.Item>

          <Form.Item label={t('blog.image')} required>
            <UploadFile
              maxCount={1}
              value={formik.values.images}
              onChange={value => formik.setFieldValue('image', value)}
            />
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

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Space>
  )
}

export default BlogCreate
