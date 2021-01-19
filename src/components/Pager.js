import React from 'react'

const Pager = ({
  page = 1
}) => {
  return (
    <ul className="pagination">
      <li className="page-item" className={ page === 1 ? "hidden" : "" }>
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span> <span className="sr-only">Prev</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="index.html">1</a>
      </li>
      <li className="page-item">
        <a className="page-link" href="page2.html">2</a>
      </li>
      <li className="page-item" className={ page === 2 ? "hidden" : "" }>
        <a className="page-link" href="page2.html" aria-label="Next">
          <span className="sr-only">Next</span> <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  )
}

export default Pager
