import React from 'react'
import ExternalLinkIcon from '../components/ExternalLinkIcon'

const FooterSection = () => {
  return (
    <footer>
      <div className="social-media">
        <ExternalLinkIcon className="social-media-icon" link="https://facebook.com" icon="fa-brands fa-facebook-f" />
        <ExternalLinkIcon className="social-media-icon" link="https://instagram.com" icon="fa-brands fa-instagram" />
        <ExternalLinkIcon className="social-media-icon" link="https://twitter.com" icon="fa-brands fa-twitter" />
        <ExternalLinkIcon className="social-media-icon" link="https://google.com" icon="fa-brands fa-google" />
        <ExternalLinkIcon className="social-media-icon" link="https://linkedin.com" icon="fa-brands fa-linkedin" />

      </div>
      <div> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2022 Fixxo. All Rights Reserved.</div>
    </footer>
  )
}

export default FooterSection