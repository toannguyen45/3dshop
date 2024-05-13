import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {
  createNewblogCat,
  resetState,
} from '../../../features/BlogCategory/blogCategorySlice'
import { Button, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'

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
  return (
    <div>
      <h3 className="mb-4  title">Add Blog Category</h3>
      <div>
        <Form onFinish={formik.handleSubmit}>
          <Form.Item
            label={t('blogCategory.title')}
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
              name="name"
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
    </div>
  )
}

export default Create
