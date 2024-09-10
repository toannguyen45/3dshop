import { Space, Form, Button, Input } from 'antd'
import { useFormik } from 'formik'
import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { toast } from 'react-toastify'

import {
  createNewCat,
  resetCategoryState,
  getCategory,
  updateCategory,
} from '../../../Features/Category/CategorySlice'

const CateCreate = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getCategory(id))
    } else {
      dispatch(resetCategoryState())
    }
  }, [dispatch, id])

  const {
    isSuccess,
    isError,
    isLoading,
    createdCategory,
    updatedCategory,
    cateName,
    cateDesc,
  } = useSelector(state => state.category)

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success('Category Added Successfullly!')
      navigate('/admin/categories')
      dispatch(resetCategoryState())
    }
    if (isSuccess && updatedCategory) {
      toast.success('Category Updated Successfullly!')
      navigate('/admin/categories')
      dispatch(resetCategoryState())
    }
    if (isError) {
      toast.error('Something Went Wrong!')
      dispatch(resetCategoryState())
    }
  }, [isSuccess, isError, isLoading, createdCategory, updatedCategory, navigate, dispatch])

  let schema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    description: yup.string(),
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: cateName || '',
      description: cateDesc || '',
    },
    validationSchema: schema,
    onSubmit: values => {
      if (id !== undefined) {
        const data = { id: id, cateData: values }
        dispatch(updateCategory(data))
      } else {
        dispatch(createNewCat(values))
        formik.resetForm()
      }
    },
  })

  const items = useMemo(() => [
    {
      href: '/admin/categories',
      title: 'Category',
    },
    {
      title: id !== undefined ? 'Edit' : 'Add',
    },
  ], [id]);

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">
        {id !== undefined ? 'Edit' : 'Add'} Category
      </h3>
      <div>
        <Form onFinish={formik.handleSubmit} layout="vertical">
          <Form.Item
            label={t('cate.name')}
            required
            validateStatus={
              formik.errors.name && formik.touched.name ? 'error' : ''
            }
            help={
              formik.errors.name && formik.touched.name
                ? formik.errors.name
                : ''
            }
          >
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item
            label={t('cate.description')}
            required
            validateStatus={
              formik.errors.description && formik.touched.description
                ? 'error'
                : ''
            }
            help={
              formik.errors.description && formik.touched.description
                ? formik.errors.description
                : ''
            }
          >
            <Input
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form>
      </div>
    </Space>
  )
}

export default CateCreate
