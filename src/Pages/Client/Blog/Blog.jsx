import React from 'react'
import './Blog.scss'
import BreadCrumbCustom from '../../../Components/Client/BreadCrumbCustom/BreadCrumbCustom'
import MetaSeo from '../../../Components/MetaSeo/MetaSeo'

const Blog = () => {
  const items = [
    {
      title: 'Tin tức',
    },
  ]

  const blog = {
    date: '2022-01-01',
    author: 'Tác giả 1',
    description:
      '<p>Ngày 10/1 /2023 vùa qua Công ty TNHH 3D THINKING trịnh trọng tổ chức lễ kỉ niệm 5 năm thành lập công ty. Ông Dương Văn Thái đã đôi lời chia sẻ về chặng đường và những thành tự đã đạt được, cũng như những định hướng của công ty trong thời gian sắp tới. Đầu tiên, thay mặt ban lãnh đạo công ty TNHH 3D Thinking , tôi xin trân trọng gửi lời cảm ơn và lời chúc tốt đẹp nhất tới Quý khách hàng cùng toàn thể anh chị em cán bộ công nhân viên công ty. Kính thưa quý vị! 5 năm, một chặng đường không dài, nhưng cũng không ngắn đối với sự phát triển của một doanh nghiệp, nhưng nó cũng đủ để chúng ta nhìn thấy được sự thay đổi, những bước chuyển biến của công ty. Là một dốc mốc quan trọng trong lịch sử phát triển của công ty Nhớ lại những ngày đầu thành lập khi đó chúng ta hoạt động trong văn phòng đi thuê tài tòa chung cư 5 tầng chỉ bao gồm 4 thành viên, không có nhà xưởng, kho bãi ,không trang thiết bị phục vụ sản xuất kinh doanh, khi đó chúng ta chỉ phục vụ cho 1 vài khách hàng nhỏ lẻ và một số khách hàng thiết kế tại Mỹ đây là nền tảng vững chắc là cơ sở cho sự phát triển hiện tại . Một diều đáng mừng tất cả các khách hàng gắn bó với 3D thinking ngay từ khi thành lập hiện nay cũng đã phát triển thành công ty lớn và vẫn đang hợp tác sâu rộng hơn trong nhiều lĩnh vực</p>',
  }

  const categories = ['Đánh giá máy in 3D', 'Giải Pháp', 'Hoạt động công ty']

  return (
    <div className="blog">
      <MetaSeo title="Tin tức" description="Tin tức" />

      <div className="breadcrumb">
        <BreadCrumbCustom items={items} />
      </div>

      <div className="content">
        <div className="blog-column">
          <h2>Lễ Kỉ Niệm 5 Năm thành lập Công Ty TNHH 3D Thinking</h2>
          <hr className="divider" />
          <div className="blog-item-meta">
            <span className="meta-label">Ngày đăng: </span>
            <span className="meta-data">{blog.date}</span>
            <span className="meta-label">Tác giả: </span>
            <span className="meta-data">{blog.author}</span>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></div>
        </div>
        <div className="category-column">
          <h3>Danh mục</h3>
          <div className="category-column">
            {categories.map((category, index) => (
              <p key={index} className="category">
                {category}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
