import React from 'react'

export default function ProductBox({product}) {

    const {id, title, lessDescr, catalog, thumbnail, count} = product

  return (
    <div className='product-box'>
        <div className="product-title">
            {title}
        </div>
    </div>
  )
}
