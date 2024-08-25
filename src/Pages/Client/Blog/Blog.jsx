import React, { useEffect } from 'react'
import './Blog.scss'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import { getBlogClient } from '../../../Features/Blog/BlogSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { formatDateTimeFull } from '../../../Utils/formatDate'

const Blog = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()

  const { isLoading, blog } = useSelector(state => state.blog)

  useEffect(() => {
    dispatch(getBlogClient(slug))
  }, [])

  const items = [
    {
      href: '/tin-tuc',
      title: 'Tin tức',
    },
    {
      title: blog?.title
    }
  ]

  if (isLoading) {
    return <div className="blog">Đang tải...</div>
  }

  return (
    <div className="blog">
      <MetaSeo
        title={blog?.meta_title}
        description={blog?.meta_description}
        keyword={blog?.meta_keyword}
      />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <div className="blog-column">
          <h2>{blog?.title}</h2>
          <hr className="divider" />
          <div className="blog-item-meta">
            <span className="meta-label">Ngày đăng: </span>
            <span className="meta-data">
              {formatDateTimeFull(blog?.created_at)}
            </span>
            <span className="meta-label">Tác giả: </span>
            <span className="meta-data">{blog?.author}</span>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Blog
