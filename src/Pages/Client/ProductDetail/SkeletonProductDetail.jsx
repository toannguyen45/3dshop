import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './SkeletonProductDetail.scss'

const SkeletonProductDetail = () => {
    console.log('alo')
    return (
        <div className='skeleton-detail'>
            <div className="image-skeleton">
                <Skeleton height={400} />
            </div>
            <div className='info-skeleton'>
                <Skeleton count={4} />
            </div>
        </div>
    )
}

export default SkeletonProductDetail
