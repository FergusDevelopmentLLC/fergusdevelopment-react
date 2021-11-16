import React from 'react'

const PortfolioItem = (props) => {

  const { title, description, url, imageUrl, links, btnText } = props.portfolioItem

  return (
    <div className='portfolio-item'>
      <h3>{ title }</h3>
      <p className="portfolio-desc" dangerouslySetInnerHTML={{ __html: description }}></p>
      <div><a href={ url } target="_blank"><img className="portfolio-img" src={ imageUrl } alt={ title }></img></a></div>
      <ul>
        {
          links.map((link, i) => {
          return <li key={ i }>{ link.prefix }<a href={ link.url } target="_blank">{ link.linkText }</a></li>
          })
        }
      </ul>
      <div><a className="btn info" href={ url } target="_blank">{ btnText }</a></div>
    </div>
  )
}

export default PortfolioItem