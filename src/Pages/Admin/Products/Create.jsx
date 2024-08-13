import { Space, Form, Button, Input, Select } from 'antd'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { toast } from 'react-toastify'

import {
  createNewCat,
  resetState,
  getCategory,
  updateCategory,
} from '../../../Features/Category/CategorySlice'
import ReactQuill from 'react-quill'

const Create = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getCategory(id))
    } else {
      dispatch(resetState())
    }
  }, [id])

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
      dispatch(resetState())
    }
    if (isSuccess && updatedCategory) {
      toast.success('Category Updated Successfullly!')
      navigate('/admin/categories')
      dispatch(resetState())
    }
    if (isError) {
      toast.error('Something Went Wrong!')
      dispatch(resetState())
    }
  }, [isSuccess, isError, isLoading])

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

  const items = [
    {
      href: '/admin/categories',
      title: 'Category',
    },
    {
      title: id !== undefined ? 'Edit' : 'Add',
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">
        {id !== undefined ? 'Edit' : 'Add'} Product
      </h3>
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
          <Form.Item
            name="category"
            label="Category"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              //   onChange={onGenderChange}
              allowClear
            >
              <Select.Option value="male">male</Select.Option>
              <Select.Option value="female">female</Select.Option>
              <Select.Option value="other">other</Select.Option>
            </Select>
          </Form.Item>
          <div style={{ marginBottom: '1.5rem' }}>
            <ReactQuill
              theme="snow"
              className="mt-3"
              name="description"
              modules={{
                toolbar: [
                  [{ font: [] }],
                  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                  [{ header: '1' }, { header: '2' }], // custom button values
                  ['blockquote', 'code-block'], // blocks
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                  [{ direction: 'rtl' }], // text direction
                  [{ align: [] }],
                  ['link', 'image', 'video'],
                  ['clean'], // remove formatting button
                ],
              }}
            />
            <div className="error">
              {/* {formik.touched.description && formik.errors.description} */}
            </div>
          </div>
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
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
