import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15346.439660873995!2d108.21458926046441!3d15.929494389492051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142055478f34195%3A0xd31e007ff153f292!2zY2jhu6MgVGhhbmggUXXDvXQ!5e0!3m2!1svi!2s!4v1723874482372!5m2!1svi!2s"
                width="100%"
                // height="450"
                style={{ border: '1px solid' }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default About