import React from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css' // Import Quill styles
import ImageUploader from 'quill-image-uploader'

// Import quill-image-uploader styles
import 'quill-image-uploader/dist/quill.imageUploader.min.css'

// Register the image uploader module
Quill.register('modules/imageUploader', ImageUploader)

import axiosInst from '../../Utils/axiosInstance'

const modules = {
  toolbar: {
    container: [
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
  },
  imageUploader: {
    upload: file => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);

        axiosInst
          .post('/upload-image', formData)
          .then(response => {
            const { data } = response;
            if (data.url) {
              resolve(data.url); // Resolve với URL của ảnh sau khi upload thành công
            } else {
              reject('Upload failed');
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
  },
}

function MyEditor({ name, onChange, value }) {
  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      name={name}
      onChange={onChange}
      value={value}
    />
  )
}

export default MyEditor
