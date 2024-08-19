import React from 'react'
import './News.scss'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div className="news-section padding-x-default padding-y-default">
      <h2>
        <span className="title-part1">Tin tức</span>
        <span className="title-part2"> nổi bật</span>
      </h2>
      <div className="news-items">
        <div className="news-item card-news">
          <a href="#">
            <div className="news-image">
              <span className="date">01 TH01, 2024</span>
            </div>
          </a>
          <div className="card-body">
            <h3>Cách hiệu chỉnh máy in 3D của bạn</h3>
            <p>
              Cách hiệu chỉnh máy in 3D của bạn Điều chỉnh lớp đầu tiên [caption
              id="attachment_13233" align="aligncenter" width="1000"] Cách hiệu
              chỉnh máy in 3D của bạn lớp đầu tiên.[/caption] Là nền tảng, một
              lớp đầu tiên tốt là rất quan trọng...
            </p>
            <p>Tác giả: Admin </p>
          </div>
          <div className="card-footer">
            <Link to="/tin-tuc">Đọc tiếp</Link>
          </div>
        </div>
        <div className="news-item card-news">
          <a href="#">
            <div className="news-image">
              <span className="date">01 TH01, 2024</span>
            </div>
          </a>
          <div className="card-body">
            <h3>Cách hiệu chỉnh máy in 3D của bạn</h3>
            <p>
              Cách hiệu chỉnh máy in 3D của bạn Điều chỉnh lớp đầu tiên [caption
              id="attachment_13233" align="aligncenter" width="1000"] Cách hiệu
              chỉnh máy in 3D của bạn lớp đầu tiên.[/caption] Là nền tảng, một
              lớp đầu tiên tốt là rất quan trọng...
            </p>
            <p>Tác giả: Admin </p>
          </div>
          <div className="card-footer">
            <Link to="/tin-tuc">Đọc tiếp</Link>
          </div>
        </div>
        <div className="news-item card-news">
          <a href="#">
            <div className="news-image">
              <span className="date">01 TH01, 2024</span>
            </div>
          </a>
          <div className="card-body">
            <h3>Cách hiệu chỉnh máy in 3D của bạn</h3>
            <p>
              Cách hiệu chỉnh máy in 3D của bạn Điều chỉnh lớp đầu tiên [caption
              id="attachment_13233" align="aligncenter" width="1000"] Cách hiệu
              chỉnh máy in 3D của bạn lớp đầu tiên.[/caption] Là nền tảng, một
              lớp đầu tiên tốt là rất quan trọng...
            </p>
            <p>Tác giả: Admin </p>
          </div>
          <div className="card-footer">
            <Link to="/tin-tuc">Đọc tiếp</Link>
          </div>
        </div>
      </div>
      <Link to="/tin-tuc" className="view-more">
        Xem thêm
      </Link>
    </div>
  )
}

export default News
