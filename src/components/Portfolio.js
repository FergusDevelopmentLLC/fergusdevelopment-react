import React, { useEffect } from 'react'
import PortfolioItem from './PortfolioItem'
import { portfolioItems01 } from '../data/portfolio-items-01'
import { portfolioItems02 } from '../data/portfolio-items-02'
import { useLocation } from 'react-router-dom'

const Portfolio = () => {

  const location = useLocation()
  const portfolioItems = location.pathname === '/' ? portfolioItems01 : portfolioItems02

  //https://reactrouter.com/web/guides/scroll-restoration
  const ScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    return null
  }

  const getPortfolioItems = () => {
    return portfolioItems.map((item, i) => {
      return <PortfolioItem key={i} portfolioItem = { item } />
    })
  }

  return (
    <>
    <ScrollToTopOnMount />
    { getPortfolioItems() }
    </>
  )
}



export default Portfolio
