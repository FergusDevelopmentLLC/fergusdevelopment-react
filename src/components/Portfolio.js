import React from 'react'
import PortfolioItem from './PortfolioItem'
import { portfolioItems }  from '../data/portfolio-items'

const Portfolio = () => {

  return (
    portfolioItems.map((item) => {
      return <PortfolioItem portfolioItem = { item } />
    })

  )
}

export default Portfolio
