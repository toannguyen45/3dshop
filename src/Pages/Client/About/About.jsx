import React from 'react'
import './About.scss'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'

const About = () => {
  const items = [
    {
      title: 'Về chúng tôi',
    },
  ]

  return (
    <div className="map">
      <MetaSeo title="Về chúng tôi" description="Về chúng tôi" />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <div className="about">
          <h2 className="title">Công ty in 3D 3DTeam</h2>
          <hr className="divider" />
          <p className="body">
            3DTeam là công ty in 3D hàng đầu tại Đà Nẵng. Chúng tôi cung cấp
            các dịch vụ in 3D chất lượng cao và giá cả phải chăng. Với đội ngũ
            kỹ sư chuyên nghiệp, chúng tôi cam kết mang đến cho khách hàng
            những sản phẩm in 3D chất lượng nhất. Chuyên cung cấp các dịch vụ
            in 3D như in 3D nhanh, in 3D mẫu, in 3D công nghiệp, in 3D quảng
            cáo, in 3D quà tặng, in 3D kiến trúc, in 3D y tế, in 3D giáo dục,
            in 3D ngành công nghiệp, in 3D ngành nghệ thuật, in 3D ngành xây
          </p>
          <h6>CTY TNHH 3D SERVICES VIỆT NAM</h6>
          <h6>Mã số DN: 0314724035</h6>
          <h6>Ngày cấp: 09/11/2017</h6>
          <h6>Cơ quan cấp: Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh</h6>
          <h6>
            Văn phòng: 70 Đường D2, P. Tăng Nhơn Phú A, TP. Thủ Đức, TP. Hồ
            Chí Minh
          </h6>
          <h6>Tel: 0937777943 – 0368779150</h6>
        </div>
        <div className="gg-map">
          <h2 className="title">Địa chỉ</h2>
          <hr className="divider" />
          <div className="iframe">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30693.35086193358!2d108.229051!3d15.92641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142055478f34195%3A0xd31e007ff153f292!2zY2jhu6MgVGhhbmggUXXDvXQ!5e0!3m2!1svi!2sus!4v1724130074087!5m2!1svi!2sus"
              width="800"
              height="600"
              style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
