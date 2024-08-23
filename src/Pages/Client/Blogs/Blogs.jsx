import React, { useEffect, useState } from 'react'
import './Blogs.scss'
import { Pagination } from 'antd'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogsClient } from '../../../Features/Blog/BlogSlice'
import { formatDateTimeFull } from '../../../Utils/formatDate'
import { storage_url } from '../../../Utils/baseUrl'
import { Link } from 'react-router-dom'

import { getBlogCatesClient } from '../../../Features/BlogCategory/BlogCategorySlice'

const Blogs = () => {
  const dispatch = useDispatch()

  const { blogsClient, isLoading } = useSelector(state => state.blog)
  const { blogCategoriesClient, isLoading: isLoadingCates } = useSelector(
    state => state.blogCategory
  )

  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = () => {
    dispatch(getBlogsClient({ currentPage, category: 1 }))
  }

  useEffect(() => {
    dispatch(getBlogCatesClient())
  }, [])

  useEffect(() => {
    fetchData()
  }, [currentPage])

  const categories = ['Category 1', 'Category 2', 'Category 3']

  const items = [
    {
      title: 'Tin tức',
    },
  ]

  console.log('blogCategoriesClient', blogCategoriesClient)

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
          {isLoading ? (
            <div>Đang tải...</div>
          ) : (
            blogsClient?.data?.map((item, index) => (
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
            ))
          )}
          <Pagination
            className="pagination-custom"
            current={currentPage}
            total={blogsClient?.total}
            pageSize={5}
            onChange={page => setCurrentPage(page)}
          />
        </div>
        <div className="category-blogs">
          <h3>Danh mục</h3>
          <hr className="divider" />
          <div className="category-column">
            {blogCategoriesClient?.data.map((item, index) => (
              <button
                key={item?.id}
                onClick={() =>
                  dispatch(getBlogsClient({ currentPage, category: item.id }))
                }
                className="category-item"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
