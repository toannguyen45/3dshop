import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'

const BreadcrumbCus = ({ items }) => {
  return (
    <Breadcrumb
      items={[
        {
          href: '/admin/dashboard',
          title: <HomeOutlined />,
        },
        ...items,
      ]}
    />
  )
}

export default BreadcrumbCus
