import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SkeletonBlogs.scss'

const SkeletonBlogs = ({ amount }) => {
  const loadBlogs = Array(amount).fill(1)

  return loadBlogs.map((_, i) => (
    <div className="card-skeleton" key={i}>
      <div className="image-skeleton">
        <Skeleton height={200} />
      </div>
      <div>
        <Skeleton count={4} />
        <Skeleton className="button-skeleton" />
      </div>
    </div>
  ))
}

export default SkeletonBlogs
