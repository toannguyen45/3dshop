import React from 'react'
import './News.scss'
import { Link } from 'react-router-dom'

const newsData = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'Tin tức 1',
    description: 'Mô tả tin tức 1',
    date: '01/01/2021',
    author: 'Nguyễn Văn A',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'Tin tức 2',
    description: 'Mô tả tin tức 2',
    date: '02/01/2021',
    author: 'Nguyễn Văn B',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'Tin tức 3',
    description: 'Mô tả tin tức 3',
    date: '03/01/2021',
    author: 'Nguyễn Văn C',
  },
]
const News = () => {
  return (
    <div className="news-section padding-x-default padding-y-default">
      <h2>
        <span className="title-part1">Tin tức</span>
        <span className="title-part2"> nổi bật</span>
      </h2>
      <div className="news-items">
        {newsData.map(newsItem => (
          <div className="news-item card-news" key={newsItem.id}>
            <a href="#">
              <div className="news-image">
                <img src={newsItem.imageUrl} alt={newsItem.title} />
                <span className="date">{newsItem.date}</span>
              </div>
            </a>
            <div className="card-body">
              <h3>{newsItem.title}</h3>
              <p>{newsItem.description}</p>
              <p>Tác giả: {newsItem.author}</p>
            </div>
            <div className="card-footer">
              <Link to="/tin-tuc">Đọc tiếp</Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/tin-tuc" className="view-more">
        Xem thêm
      </Link>
    </div>
  )
}

export default News
