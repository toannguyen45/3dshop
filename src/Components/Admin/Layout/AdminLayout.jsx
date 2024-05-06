import { Button, Layout, Menu, theme } from 'antd'
import {
  AppstoreAddOutlined,
  AreaChartOutlined,
  CodeSandboxOutlined,
  FileDoneOutlined,
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  SnippetsOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const { Header, Sider, Content } = Layout

const AdminLayout = () => {
  const { t } = useTranslation('translation')
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
            color: 'white',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          ADMIN 3DSHOP
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: '/admin/dashboard',
              icon: <AreaChartOutlined />,
              label: t('side_menu.dashboard_label'),
            },
            {
              key: '/admin/catalog',
              icon: <ShopOutlined />,
              label: t('side_menu.catalog_management_label'),
              children: [
                {
                  key: '/admin/categories',
                  icon: <AppstoreAddOutlined />,
                  label: t('side_menu.category_management_label'),
                },
                {
                  key: '/admin/brands',
                  icon: <CodeSandboxOutlined />,
                  label: t('side_menu.brand_management_label'),
                },
                {
                  key: '/admin/products',
                  icon: <CodeSandboxOutlined />,
                  label: t('side_menu.product_management_label'),
                },
              ],
            },
            {
              key: '/admin/orders',
              icon: <FileDoneOutlined />,
              label: t('side_menu.order_management_label'),
            },
            {
              key: '/admin/customers',
              icon: <TeamOutlined />,
              label: t('side_menu.customer_management_label'),
            },
            {
              key: '/admin/blogs',
              icon: <FormOutlined />,
              label: t('side_menu.blog_management_label'),
              children: [
                {
                  key: '/admin/blog-categories',
                  icon: <SnippetsOutlined />,
                  label: t('side_menu.blog_category_management_label'),
                },
                {
                  key: '/admin/blogs',
                  icon: <FormOutlined />,
                  label: t('side_menu.blog_management_label'),
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
