import React from 'react'
import { formatDateTimeFull } from '../../../Utils/formatDate'
import { storage_url } from '../../../Utils/baseUrl'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BlogsData = ({ item }) => {
  return (
    <div key={item.id} className="blogs-item">
      <img
        loading="lazy"
        src={`${storage_url}/${item.image}`}
        alt={item.title}
        className="news-item-image"
      />
      <h3 className="news-item-title">{item.title}</h3>
      <div className="news-item-meta">
        <span className="meta-label">Ngày đăng: </span>
        <span className="meta-data">{formatDateTimeFull(item.created_at)}</span>
        <span className="meta-label">Tác giả: </span>
        <span className="meta-data">{item.author}</span>
      </div>
      <p className="news-item-description">{item.summary}</p>
      <Link to={`/tin-tuc/${item.slug}`} className="news-item-more">
        Xem thêm
      </Link>
    </div>
  )
}

export default BlogsData
