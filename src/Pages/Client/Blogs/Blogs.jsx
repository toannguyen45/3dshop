import React from 'react'
import './Blogs.scss'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import SkeletonBlogs from './SkeletonBlogs'

const BlogsData = React.lazy(
  () => import('../../../Components/Client/BlogsData/BlogsData')
)

const Blogs = () => {
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
          <React.Suspense fallback={<SkeletonBlogs amount={5} />}>
            <BlogsData />
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}

export default Blogs
