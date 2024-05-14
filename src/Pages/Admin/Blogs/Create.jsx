import { Button, Form, Input, Select, Space } from 'antd'
import React from 'react'
import BreadCrumbCus from '@components/Admin/BreadCrumbCus'
import { useTranslation } from 'react-i18next'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Create = () => {
  const { t } = useTranslation('translation')

  const items = [
    {
      href: '/admin/blogs',
      title: 'Blogs',
    },
    {
      title: 'Create',
    },
  ]

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <BreadCrumbCus items={items} />
      <h3 className="mb-4  title">Add Blog</h3>
      <div>
        <Form layout="vertical">
          <Form.Item
            label={t('blog_cate.title')}
            name="title"
            required
            // validateStatus={
            //   formik.errors.title && formik.touched.title ? 'error' : ''
            // }
            // help={
            //   formik.errors.title && formik.touched.title
            //     ? formik.errors.title
            //     : ''
            // }
          >
            <Input
              name="name"
              //   value={formik.values.title}
              //   onChange={formik.handleChange('title')}
              //   onBlur={formik.handleBlur('title')}
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
              //   formats={[
              //     'header',
              //     'bold',
              //     'italic',
              //     'underline',
              //     'strike',
              //     'blockquote',
              //     'list',
              //     'bullet',
              //     'indent',
              //     'link',
              //     'image',
              //   ]}
              //   modules={'toolbar'}
              // onChange={formik.handleChange('description')}
              // value={formik.values.description}
            />
            <div className="error">
              {/* {formik.touched.description && formik.errors.description} */}
            </div>
          </div>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Space>
  )
}

export default Create
