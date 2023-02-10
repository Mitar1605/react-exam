import React, { useEffect, useReducer} from 'react'
import './Catalog.css'
import ProductBox from '../../components/product/ProductBox'
import { productsData } from '../../assets/data/productsData'

export default function Catalog() {

  return (
    <div className='catalog__main'>
        <div className="catalog-products-block">
            {
                productsData.map(product => {
                    return (
                        <div className="catalog-product" key={product.id}>
                            <ProductBox product={product} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
