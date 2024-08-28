import { Space, Form, Button, Input, Select } from 'antd'
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
  getProduct,
  resetState,
  updateProduct,
} from '../../../Features/Product/ProductSlice'

import { getCategories } from '../../../Features/Category/CategorySlice'

const ProductCreate = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  const items = [
    {
      href: '/admin/products',
      title: 'Product',
    },
    {
      title: 'Add',
    },
  ]

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getProduct(id))
    } else {
      dispatch(resetState())
    }
  }, [id])

  const {
    isSuccess,
    isError,
    isLoading,
    createdProduct,
    updatedProduct,
    prodName,
    prodDesc,
    prodPrice,
    prodQuantity,
    prodImages,
    prodCategoryId,
  } = useSelector(state => state.product)

  const { categories } = useSelector(state => state.category)

  const [previewImages, setPreviewImages] = useState([])

  const handleImageChange = e => {
    formik.setFieldValue('images', e.target.files)

    // Create URL for each selected file
    const filesArray = Array.from(e.target.files).map(file =>
      URL.createObjectURL(file)
    )

    // Store URLs in the state
    setPreviewImages(filesArray)

    // Free memory when component is unmounted
    return () => filesArray.forEach(url => URL.revokeObjectURL(url))
  }

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success('Product Added Successfullly!')
      navigate('/admin/products')
      dispatch(resetState())
    }
    if (isSuccess && updatedProduct) {
      toast.success('Product Updated Successfullly!')
      navigate('/admin/products')
      dispatch(resetState())
    }
    if (isError) {
      toast.error('Something Went Wrong!')
    }
  }, [isSuccess, isError, isLoading])

  let schema = yup.object().shape({
    name: yup.string().required('Name is Required'),
    description: yup.string().required('Description is Required'),
    price: yup.number().required('Price is Required'),
    category: yup.string().required('Category is Required'),
    quantity: yup.number().required('Quantity is Required'),
    images:
      id !== undefined
        ? yup
            .mixed()
            .nullable()
            .test(
              'fileSize',
              'File too large',
              value =>
                !value ||
                !(value instanceof FileList) ||
                Array.from(value).every(file => file.size <= 2097152) // 2MB
            )
            .test(
              'fileFormat',
              'Unsupported Format',
              value =>
                !value ||
                !(value instanceof FileList) ||
                Array.from(value).every(file =>
                  ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type)
                )
            )
            .test(
              'maxFiles',
              'Too many files',
              value =>
                !value || !(value instanceof FileList) || value.length <= 4
            )
        : yup
            .mixed()
            .required('Images are Required')
            .test(
              'fileSize',
              'File too large',
              value =>
                !value ||
                !(value instanceof FileList) ||
                Array.from(value).every(file => file.size <= 2097152) // 2MB
            )
            .test(
              'fileFormat',
              'Unsupported Format',
              value =>
                !value ||
                !(value instanceof FileList) ||
                Array.from(value).every(file =>
                  ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type)
                )
            )
            .test(
              'maxFiles',
              'Too many files',
              value =>
                !value || !(value instanceof FileList) || value.length <= 4
            ),
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: prodName || '',
      description: prodDesc || '',
      price: prodPrice || '',
      category: prodCategoryId ? String(prodCategoryId) : null,
      quantity: prodQuantity || '',
      images: null,
    },
    validationSchema: schema,
    onSubmit: values => {
      const formData = new FormData()

      if (values.image && values.image.length > 0) {
        Array.from(values.images).forEach((file, index) => {
          formData.append(`images[${index}]`, file)
        })
      }

      // append other fields
      formData.append('name', values.name)
      formData.append('description', values.description)
      formData.append('price', values.price)
      formData.append('category_id', values.category)
      formData.append('quantity', values.quantity)

      if (id !== undefined) {
        formData.append('id', id)
        dispatch(updateProduct({ id: id, data: formData }))
      } else {
        dispatch(createNewProduct(formData))
        formik.resetForm()
      }
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

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

          <Form.Item
            label={t('product.images')}
            required
            validateStatus={
              formik.errors.images && formik.touched.images ? 'error' : ''
            }
            help={
              formik.errors.images && formik.touched.images
                ? formik.errors.images
                : ''
            }
          >
            <input
              type="file"
              name="images"
              multiple
              onChange={handleImageChange}
            />
            <div
              className="preview-images"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '3px',
                marginTop: '10px',
              }}
            >
              {previewImages.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt="Preview"
                  width="200"
                  height={200}
                />
              ))}
            </div>
          </Form.Item>

          <Button type="primary" htmlType="submit" disabled={isLoading}>
            Submit
          </Button>
        </Form>
      </div>
    </Space>
  )
}

export default ProductCreate
