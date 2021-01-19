import React from 'react'

const PortfolioItem = (props) => {

  const { title, description, url, imageUrl, links, btnText } = props.portfolioItem

  return (
    <div className='portfolio-item'>
      <h3>{ title }</h3>
      <p className="portfolio-desc" dangerouslySetInnerHTML={{ __html: description }}></p>
      <div><a href={ url }><img className="portfolio-img" src={ imageUrl } alt={ title } /></a></div>
      <ul>
        {
          links.map((link) => {
          return <li>{ link.prefix}<a href={ link.url}>{ link.linkText}</a></li>
          })
        }
      </ul>
      <div><a className="btn info" href={ url }>{ btnText }</a></div>
    </div>
  )
}

export default PortfolioItem