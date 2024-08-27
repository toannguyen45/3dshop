import React, { useEffect, useState } from 'react'
import { formatDateTimeFull } from '../../../Utils/formatDate'
import { storage_url } from '../../../Utils/baseUrl'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getBlogsClient } from '../../../Features/Blog/BlogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'

const BlogsData = () => {
  const dispatch = useDispatch()
  const { blogsClient, isSuccess } = useSelector(state => state.blog)

  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = () => {
    dispatch(getBlogsClient(currentPage))
  }

  useEffect(() => {
    fetchData()
  }, [currentPage])

  return (
    isSuccess && (
      <>
        {blogsClient.data.map(item => (
          <div key={item.id} className="blogs-item">
            <LazyLoadImage
              src={`${storage_url}/${item.image}`}
              alt={item.title}
              className="news-item-image"
              effect="blur"
              width={'100%'}
              height={300}
            />
            <h3 className="news-item-title">{item.title}</h3>
            <div className="news-item-meta">
              <span className="meta-label">Ngày đăng: </span>
              <span className="meta-data">
                {formatDateTimeFull(item.created_at)}
              </span>
              <span className="meta-label">Tác giả: </span>
              <span className="meta-data">{item.author}</span>
            </div>
            <p className="news-item-description">{item.summary}</p>
            <Link to={`/tin-tuc/${item.slug}`} className="news-item-more">
              Xem thêm
            </Link>
          </div>
        ))}
        <Pagination
          className="pagination-custom"
          current={currentPage}
          total={blogsClient?.total}
          pageSize={3}
          onChange={page => setCurrentPage(page)}
        />
      </>
    )
  )
}

export default BlogsData
