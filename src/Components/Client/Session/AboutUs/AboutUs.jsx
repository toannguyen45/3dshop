import React from 'react'
import './AboutUs.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'
import ButtonCustom from '../../../ButtonCustom/ButtonCustom'

const AboutUs = () => {
  const navigate = useNavigate()

  return (
    <div className="about-us-session">
      <div className="about-us-content">
        <h2 className="about-us-title">
          <span className="title-part1">Về</span>
          <span className="title-part2"> chúng tôi</span>
        </h2>
        <p className="about-us-company">3DTeam</p>
        <p className="about-us-description">
          Thành lập vào 8/2024, 3DTeam Việt Nam là công ty dịch vụ chuyên về
          công nghệ và các giải pháp 3D.
        </p>
        <p className="about-us-description">
          Chúng tôi cung cấp các thiết bị, dịch vụ và giải pháp 3D trọn gói cho
          cá nhân, doanh nghiệp, các xưởng sản xuất.
        </p>
        <ButtonCustom title="Xem thêm" onClick={() => navigate('/ve-chung-toi')} />
      </div>
      <div className="about-us-image">
        <LazyLoadImage
          src="/images/client/team.jpg"
          width={'100%'}
          height={321}
          alt="team-img"
          effect="blur"
        />
      </div>
    </div>
  )
}

export default AboutUs
