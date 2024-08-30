import { Breadcrumb } from 'antd'
import React from 'react'
import './BreadCrumbCustom.scss'

const BreadCrumbCustom = ({ items }) => {
  return (
    <Breadcrumb
      className="custom-breadcrumb"
      separator="/"
      items={[
        {
          href: '/',
          title: 'Trang chủ',
        },
        ...items,
      ]}
    />
  )
}

export default BreadCrumbCustom
