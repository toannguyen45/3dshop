import React, { useState } from 'react'
import './Blogs.scss'
import { Button, Pagination } from 'antd'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'

const Blogs = () => {
  const newsItems = [
    {
      image: '/images/client/tintuc1.jpg',
      title: 'So sánh máy quét 3D Creality CR-Scan Otter và CR-Scan Raptor',
      description:
        'So sánh PETG và ABS Tổng quan [caption id="attachment_13246" align="aligncenter" width="1000"] So sánh PETG và ABS[/caption] Đặc Tính PETG ABS Nhiệt độ đầu in 220-260 °C 230-270 °C Nhiệt độ bàn in 60-80 °C 90-120 °C Vỏ bọc Tùy chọn...',
      author: 'Tác giả 1',
      date: '2022-01-01',
    },
    {
      image: '/images/client/tintuc2.jpg',
      title: 'Cách hiệu chỉnh máy in 3D của bạn',
      description:
        'Cách hiệu chỉnh máy in 3D của bạn Điều chỉnh lớp đầu tiên [caption id="attachment_13233" align="aligncenter" width="1000"] Cách hiệu chỉnh máy in 3D của bạn lớp đầu tiên.[/caption] Là nền tảng, một lớp đầu tiên tốt là rất quan trọng...',
      author: 'Tác giả 2',
      date: '2022-01-02',
    },
  ]

  const categories = ['Category 1', 'Category 2', 'Category 3']

  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage] = useState(2)

  const indexOfLastNews = currentPage * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNewsItems = newsItems.slice(indexOfFirstNews, indexOfLastNews)

  const items = [
    {
      title: 'Tin tức',
    },
  ]

  return (
    <div className="blogs">
      <MetaSeo title="Tin tức" description="Tin tức" />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <div className="news-column">
          <h2>Tin tức</h2>
          <hr className="divider" />
          {currentNewsItems.map((item, index) => (
            <div key={index} className="blogs-item">
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="news-item-image"
              />
              <h3 className="news-item-title">{item.title}</h3>
              <div className="news-item-meta">
                <span className="meta-label">Ngày đăng: </span>
                <span className="meta-data">{item.date}</span>
                <span className="meta-label">Tác giả: </span>
                <span className="meta-data">{item.author}</span>
              </div>
              <p className="news-item-description">{item.description}</p>
              <Button className="news-item-more">Xem thêm</Button>
            </div>
          ))}
          <Pagination
            className="pagination-custom"
            current={currentPage}
            total={newsItems.length}
            pageSize={newsPerPage}
            onChange={page => setCurrentPage(page)}
          />
        </div>
        <div className="category-blogs">
          <h3>Danh mục</h3>
          <hr className="divider" />
          <div className="category-column">
            {categories.map((category, index) => (
              <p key={index} className="category">
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
