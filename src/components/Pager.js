import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Pager = () => {

  const location = useLocation()

  return (
    <ul className="pagination">
      <li className={ location.pathname === '/' ? 'page-item hidden' : 'page-item' }>
        <Link className="page-link" aria-label="Previous" to="/page2"><span aria-hidden="true">&laquo;</span> <span className="sr-only">Prev</span></Link>
      </li>
      <li className="page-item">
        <Link className="page-link" to="/">1</Link>
      </li>
      <li className="page-item">
        <Link className="page-link" to="/page2">2</Link>
      </li>
      <li className={ location.pathname === '/page2' ? 'page-item hidden' : 'page-item' }>
        <Link className="page-link" aria-label="Next" to="/page2"><span className="sr-only">Next</span> <span aria-hidden="true">&raquo;</span></Link>
      </li>
    </ul>
  )
}

export default Pager
