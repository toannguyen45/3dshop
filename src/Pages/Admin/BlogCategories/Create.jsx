import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {
  createNewblogCat,
  resetState,
} from '@features/BlogCategory/BlogCategorySlice'
import { Button, Form, Input, Space } from 'antd'
import { useTranslation } from 'react-i18next'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'

const Create = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const newBlogCategory = useSelector(state => state.bCategory)
  const { isSuccess, isError, isLoading, createBlogCategory, blogCatName } =
    newBlogCategory

  let schema = yup.object().shape({
    title: yup.string().required('Category Name is Required'),
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogCatName || '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(createNewblogCat(values))
      formik.resetForm()
      setTimeout(() => {
        dispatch(resetState())
      }, 300)
    },
  })

  const items = [
    {
      href: '/admin/blog-categories',
      title: 'Blog Category',
    },
    {
      title: 'Create',
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Add Blog Category</h3>
      <div>
        <Form onFinish={formik.handleSubmit} layout="vertical">
          <Form.Item
            label={t('blog_cate.title')}
            name="title"
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
              onChange={formik.handleChange('title')}
              onBlur={formik.handleBlur('title')}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Space>
  )
}

export default Create
