import React from 'react'

export default function Pagination(props) {
const linkPages=[];
  for(let i=1;i<=3;i++) {
    linkPages.push(<li key={i} onClick={(e)=>props.onPageChange(e,i)} className="page-item page-link">{i}</li>)
  }
  return (


<nav aria-label="Page navigation example">
  <ul className="pagination">   
  {linkPages}
  </ul>
</nav>

  )
}
