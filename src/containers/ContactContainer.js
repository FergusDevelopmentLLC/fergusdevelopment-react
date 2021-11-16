import React from 'react'

function ContactContainer() {
  return (
    <div className="full">
      <main className="main">
        <div className="contact-image-wrapper"><img src='https://res.cloudinary.com/fergusdev/image/upload/v1611091196/portfolio/will_rjmhex.png' alt="Will Carter" /></div>
        <p>
          <strong>WILL CARTER</strong><br/>
          Denver, CO  80212<br/>
          <a href="mailto:willcarter1@protonmail.com" target="_top">willcarter1@protonmail.com</a>
        </p>
        <p>A lifelong learner returning to web development, the work that has given me the most satisfaction and provided me with a voice for creativity. My web development work began at startup, later at a design and development firm and also at a major university. The creativity that surrounds the startup environment resonates with me. More recently, I have focused on data visualization, GIS, and web mapping along with building a reinvigorated modern web development toolset.</p>
        <ul className="ul-contact-links">
          <li><span>LinkedIn:</span> <a href='http://www.linkedin.com/in/williamlcarter' target="_blank">http://www.linkedin.com/in/williamlcarter</a></li>
          <li><span>Blog:</span> <a href='https://will-carter.medium.com/' target="_blank">https://will-carter.medium.com/</a></li>
          <li><span>Portfolio:</span> <a href='https://fergusdevelopmentllc.github.io/'>https://fergusdevelopmentllc.github.io/</a></li>
          <li><span>Github:</span> <a href='https://github.com/FergusDevelopmentLLC' target="_blank">https://github.com/FergusDevelopmentLLC</a></li>
          <li><span>Blocks:</span> <a href='https://bl.ocks.org/fergusDevelopmentLLC' target="_blank">https://bl.ocks.org/fergusDevelopmentLLC</a></li>
        </ul>
        <p className="p-resume"><a href='https://docs.google.com/document/d/1x6hGafNwcIW-AXt6OkQoz_vxWU-RK4O1vcAklq2KSH4/edit?usp=sharing' target="_blank">Resume</a></p>
      </main>
    </div>
  )
}

export default ContactContainer
