import React from 'react'
import './footer.css'
import img3 from '../../images/logo.png'
import img4 from '../../images/1.png'
import img5 from '../../images/2.png'
import img6 from '../../images/3.png'

export default function Footer() {
    return (
        <div className="footer">
            <a href="/"><img src={img3} className="logo_img_footer"/></a>
            <a href="https://twitter.com/"><img src={img4} className="image1"/></a>
            <a href="https://www.facebook.com/"><img src={img5} className="image1" /></a>
            <a href="https://www.instagram.com/"><img src={img6} className="image1" /></a>
        </div>
    )
}
