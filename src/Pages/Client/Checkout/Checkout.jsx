import React from 'react'
import './Checkout.scss'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import { Form, Input } from 'antd'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { formatPrice } from '../../../Utils/format'

const { TextArea } = Input;

const Checkout = () => {

  const items = [
    {
      title: 'Giỏ hàng',
      href: '/gio-hang'
    },
    {
      title: 'Thanh toán',
    },
  ]

  let schema = yup.object().shape({
    name: yup.string().required('Họ và tên là bắt buộc'),
    phone: yup.string().required('Số điện thoại là bắt buộc'),
    email: yup.string().required('Email là bắt buộc'),
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      console.log(values, 'values')
    },
  })

  return (
    <div className="checkout">
      <MetaSeo title="Thanh toán" description="Thanh toán" />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <h2>Thanh toán</h2>
        <hr className="divider" />
        <div className='info'>
          <Form className='form-info' onFinish={formik.handleSubmit} layout="vertical">
            <Form.Item
              label='Họ và tên'
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
                placeholder='Nhập họ và tên'
              />
            </Form.Item>
            <Form.Item
              label='Số điện thoại'
              required
              validateStatus={
                formik.errors.phone && formik.touched.phone ? 'error' : ''
              }
              help={
                formik.errors.phone && formik.touched.phone
                  ? formik.errors.phone
                  : ''
              }
            >
              <Input
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Nhập số điện thoại'
              />
            </Form.Item>
            <Form.Item
              label='Email'
              required
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Nhập email'
              />
            </Form.Item>
            <Form.Item
              label='Địa chỉ'
              required
              validateStatus={
                formik.errors.address && formik.touched.address ? 'error' : ''
              }
              help={
                formik.errors.address && formik.touched.address
                  ? formik.errors.address
                  : ''
              }
            >
              <Input
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Nhập địa chỉ'
              />
            </Form.Item>
            <Form.Item
              label='Ghi chú'
              validateStatus={
                formik.errors.note && formik.touched.note ? 'error' : ''
              }
              help={
                formik.errors.note && formik.touched.note
                  ? formik.errors.note
                  : ''
              }
            >
              <TextArea
                rows={4}
                name="note"
                value={formik.values.note}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Ghi chú về đơn hàng'
              />
            </Form.Item>
          </Form>
          <div className='total-pay'>
            <h3>Đơn hàng của bạn</h3>
            <p className='info-products'>
              <span className="label">Sản phẩm</span>
              <span className="value">Tạm tính</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
