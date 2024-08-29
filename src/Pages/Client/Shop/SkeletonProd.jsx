import React from 'react'
import './SkeletonProd.scss'
import Skeleton from 'react-loading-skeleton'

const SkeletonProd = ({ amount }) => {
  const load = Array(amount).fill(1)

  return (
    <div className="product-skeleton-list">
      {load.map((_, i) => (
        <div className="card-product" key={i}>
          <div className="image-skeleton">
            <Skeleton height={200} />
          </div>
          <Skeleton count={2} />
        </div>
      ))}
    </div>
  )
}

export default SkeletonProd
