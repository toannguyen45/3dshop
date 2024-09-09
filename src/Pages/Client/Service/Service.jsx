import React from 'react'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import './Service.scss'

const Service = () => {
  const items = [
    {
      title: 'Dịch vụ',
    },
  ]

  return (
    <div className="services">
      <MetaSeo title="Dịch vụ" description="Dịch vụ" />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <h2>Dịch vụ</h2>
        <hr className="divider" />
        <div className="grid">
          <div className="info">
            <h3>Dịch vụ thiết kế 3D</h3>
          </div>
          <div className="image">
            <img src="/images/client/service/in3d.jpg" alt="in-3d" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
