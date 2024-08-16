import React from 'react'
import './Advise.css'

const Advise = () => {
  return (
    <div className="advise padding-x-default padding-y-default">
      <h3 className="advise-title">Liên hệ ngay để nhận tư vấn dịch vụ</h3>
      <form name="layout-multiple-horizontal" className="advise-form">
        <div>
          <label>
            Họ và tên *
            <input
              type="text"
              name="name"
              className="input-advise"
              required
              placeholder="Họ và tên"
            />
          </label>
          <label>
            Số điện thoại *
            <input
              type="tel"
              name="phone"
              required
              className="input-advise"
              placeholder="Số điện thoại"
            />
          </label>
        </div>
        <label>
          Nội dung *
          <textarea
            name="content"
            required
            className="input-advise"
            placeholder="Nội dung"
          ></textarea>
        </label>
        <button type="submit" className="submit-advise">
          Nhận tư vấn
        </button>
      </form>
    </div>
  )
}

export default Advise
