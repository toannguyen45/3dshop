import React from 'react'
import { Link } from 'react-router-dom'
import './News.css'

const News = () => {
  return (
    <div className='padding-x-default padding-y-default'>
      <div className='blog-item'>
        <Link to="/ve-chung-toi" className="">
          <h2 className='blog-item-title'>Máy Scan 3D công nghiệp Scantech Simscan chính hãng</h2>
        </Link>
        <span>
          <p>Ngày đăng: 18/06/2023 </p>
          <p>Tác giả: admin</p>
          <p>
            MÁY QUÉT 3D SIMSCAN – MÁY QÚET CẦM TAY CÔNG NGHIỆP 🌟GIỚI THIỆU MÁY SCAN 3D CÔNG NGHIỆP SCANTECH SIMSCAN CHÍNH HÃNG SIMSCAN, một máy quét 3D cầm tay có kích thước bằng lòng bàn tay, được thiết kế đặc biệt để quét 3D các khu vực hẹp và khó tiếp cận. Với vỏ hoàn […]
          </p>
          <button>Xem thêm</button>
        </span>
      </div>
    </div>
  )
}

export default News
