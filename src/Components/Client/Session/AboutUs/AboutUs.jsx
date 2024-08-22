import React from 'react'
import './AboutUs.scss'

const AboutUs = () => {
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
        <button className="about-us-button">Xem thêm</button>
      </div>
      <div className="about-us-image">
        <img
          src="/images/client/team-size.webp"
          alt="team-img"
          loading="eager"
        />
      </div>
    </div>
  )
}

export default AboutUs
