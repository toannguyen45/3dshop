import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './SkeletonNewCard.scss'

const SkeletonNewCard = ({ amount }) => {
    const loadBlogs = Array(amount).fill(1)

    return loadBlogs.map((_, i) => (
      <div className="card-skeleton" key={i}>
        <div className="image-skeleton">
          <Skeleton height={200} />
        </div>
        <div>
          <Skeleton count={4} />
        </div>
      </div>
    ))
}

export default SkeletonNewCard
