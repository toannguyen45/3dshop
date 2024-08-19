import React from 'react'
import { Link } from 'react-router-dom'
import './News.scss'

const News = () => {
  const newsItems = [
    {
      image: '/src/assets/images/client/tintuc1.jpg',
      title: 'So sánh máy quét 3D Creality CR-Scan Otter và CR-Scan Raptor',
      description:
        'So sánh PETG và ABS Tổng quan [caption id="attachment_13246" align="aligncenter" width="1000"] So sánh PETG và ABS[/caption] Đặc Tính PETG ABS Nhiệt độ đầu in 220-260 °C 230-270 °C Nhiệt độ bàn in 60-80 °C 90-120 °C Vỏ bọc Tùy chọn...',
    },
    {
      image: '/src/assets/images/client/tintuc2.jpg',
      title: 'Cách hiệu chỉnh máy in 3D của bạn',
      description:
        'Cách hiệu chỉnh máy in 3D của bạn Điều chỉnh lớp đầu tiên [caption id="attachment_13233" align="aligncenter" width="1000"] Cách hiệu chỉnh máy in 3D của bạn lớp đầu tiên.[/caption] Là nền tảng, một lớp đầu tiên tốt là rất quan trọng...',
    },
  ]

  const categories = ['Category 1', 'Category 2', 'Category 3']

  return (
    <div className="blogs">
      <div className="padding-x-default">
        <div className="content">
          <div className="news-column">
            <h2>Tin tức</h2>
            {newsItems.map((item, index) => (
              <div key={index} className="blogs-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-item-image"
                />
                <h2 className="news-item-title">{item.title}</h2>
                <p className="news-item-description">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="category-blogs">
            <h2>Danh mục</h2>
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
    </div>
  )
}

export default News
