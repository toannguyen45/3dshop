import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import './test.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const Slider = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='slide'>
      <div className='slide-child' style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className='button-bottom'>
        <Button type="" onClick={prev} shape="circle" icon={<LeftOutlined />} />
        <Button type="" onClick={next} shape="circle" icon={<RightOutlined />} />
      </div>

      <div className="bottom-circle">
        <div className="bottom-dots">
          {slides.map((_, i) => (
            <div key={i} className={`
              dot
              ${curr === i ? "dot-padding" : "dot-opacity"}
            `} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Slider
