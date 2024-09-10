import { Button, Card, Checkbox, Flex, Form, Input } from 'antd'
import { useFormik } from 'formik'
import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { login } from '../../../Features/Auth/AuthSlice'
import { toast } from 'react-toastify'

const Login = () => {
  const { t } = useTranslation('translation')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )

  useEffect(() => {
    if (isSuccess && user) {
      toast.success('Login Successfully!');
      navigate('/admin/dashboard');
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [isSuccess, isError, user, message, navigate]);

  const schema = useMemo(() => yup.object().shape({
    email: yup
      .string()
      .email(t('Email should be valid'))
      .required(t('Email is Required')),
    password: yup.string().required(t('Password is Required')),
  }), [t]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(login(values))
    },
  })

  return (
    <Flex justify="center" align="center" style={{ height: '100vh' }}>
      <Card>
        <Form name="basic" autoComplete="off" onFinish={formik.handleSubmit}>
          <Form.Item
            label="Email"
            name="email"
            required
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            validateStatus={
              formik.errors.email && formik.touched.email ? 'error' : ''
            }
            help={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ''
            }
          >
            <Input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            required
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            validateStatus={
              formik.errors.password && formik.touched.password ? 'error' : ''
            }
            help={
              formik.errors.password && formik.touched.password
                ? formik.errors.password
                : ''
            }
          >
            <Input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  )
}

export default Login
