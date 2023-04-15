import React from 'react'

const Pagination = ({totalCards, cardsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for(let i = 1; i<= Math.ceil(totalCards/cardsPerPage); i++) {
        pages.push(i);
    }

  return (
    <div className='pagination'>
      {
        pages.map((page, index) => {
            return <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage? 'active': 'inactive'}>{page}</button>
        })
      }
    </div>
  )
}

export default Pagination
