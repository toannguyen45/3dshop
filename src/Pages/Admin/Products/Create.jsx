import { Space, Form, Button, Input, Select, Upload } from 'antd'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { toast } from 'react-toastify'

import ReactQuill from 'react-quill'
import {
  createNewProduct,
  resetState,
} from '../../../Features/Product/ProductSlice'

import { getCategories } from '../../../Features/Category/CategorySlice'
import UploadFile from '../../../Components/Admin/UploadFile'

const Create = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const { isSuccess, isError, isLoading, createdProduct } = useSelector(
    state => state.product
  )

  const { categories } = useSelector(state => state.category)

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success('Product Added Successfullly!')
      navigate('/admin/products')
      dispatch(resetState())
    }
    if (isError) {
      toast.error('Something Went Wrong!')
      dispatch(resetState())
    }
  }, [isSuccess, isError, isLoading])

  let schema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    description: yup.string().required('Description is Required'),
    price: yup.number().required('Price is Required'),
    category: yup.string().required('Category is Required'),
    quantity: yup.number().required('Quantity is Required'),
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      description: '',
      price: '',
      category: null,
      quantity: '',
      images: [],
    },
    validationSchema: schema,
    onSubmit: values => {
      const formData = new FormData()
      values.images.forEach(file => {
        formData.append('images[]', file.originFileObj)
      })
      // append other fields
      formData.append('name', values.name)
      formData.append('description', values.description)
      formData.append('price', values.price)
      formData.append('category_id', values.category)
      formData.append('quantity', values.quantity)

      dispatch(createNewProduct(formData))
      formik.resetForm()
    },
  })

  const items = [
    {
      href: '/admin/products',
      title: 'Product',
    },
    {
      title: 'Add',
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Add Product</h3>
      <div>
        <Form onFinish={formik.handleSubmit} layout="vertical">
          <Form.Item
            label={t('product.name')}
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
          <Form.Item label={t('product.category')}>
            <Select
              placeholder="Select a option and change input text above"
              name="category"
              onChange={formik.handleChange('category')}
              onBlur={formik.handleBlur('category')}
              value={formik.values.category}
            >
              <Select.Option value="male">Select option</Select.Option>
              {categories?.data?.data.map((item, j) => {
                console.log(item, 'item')
                return (
                  <Select.Option key={j} value={String(item?.id)}>
                    {item.name}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label={t('product.description')}
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
            <ReactQuill
              theme="snow"
              className="mt-3"
              name="description"
              onChange={formik.handleChange('description')}
              value={formik.values.description}
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
          <Form.Item
            label={t('product.price')}
            required
            validateStatus={
              formik.errors.price && formik.touched.price ? 'error' : ''
            }
            help={
              formik.errors.price && formik.touched.price
                ? formik.errors.price
                : ''
            }
          >
            <Input
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item
            label={t('product.quantity')}
            required
            validateStatus={
              formik.errors.quantity && formik.touched.quantity ? 'error' : ''
            }
            help={
              formik.errors.quantity && formik.touched.quantity
                ? formik.errors.quantity
                : ''
            }
          >
            <Input
              type="number"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item label={t('product.images')} required>
            <UploadFile
              value={formik.values.images}
              onChange={value => formik.setFieldValue('images', value)}
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
