import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd'
import React from 'react'

const UploadFile = ({ value, onChange }) => {
  const handleChange = info => {
    let fileList = [...info.fileList]

    // Limit the number of uploaded files
    fileList = fileList.slice(-3)

    // Update formik field
    onChange(fileList)
  }

  return (
    <Upload
      listType="picture"
      maxCount={3}
      multiple
      fileList={value}
      onChange={handleChange}
      beforeUpload={() => false} // prevent auto uploading
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
    </Upload>
  )
}

export default UploadFile
