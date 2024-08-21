import React, { useEffect } from 'react'
import './BackToTop.scss'
import { UpOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const BackToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="back-to-top">
      {isVisible && (
        <Button
          //   ghost
          size="large"
          className="back-to-top__button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
          shape="circle"
          icon={<UpOutlined className="icon-top" />}
        />
      )}
    </div>
  )
}

export default BackToTop
