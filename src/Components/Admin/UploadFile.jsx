import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd'
import React from 'react'

const UploadFile = ({ value, onChange, maxCount }) => {
  const handleChange = info => {
    let fileList = [...info.fileList]

    // Limit the number of uploaded files
    fileList = fileList.slice(-maxCount)

    // Update formik field
    onChange(fileList)
  }

  return (
    <Upload
      listType="picture"
      maxCount={maxCount}
      multiple
      fileList={value}
      onChange={handleChange}
      beforeUpload={() => false}
    >
      <Button icon={<UploadOutlined />}>Upload (Max: {maxCount})</Button>
    </Upload>
  )
}

export default UploadFile
