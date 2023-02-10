import React from 'react'
import ProductBox from '../../components/product/ProductBox'
import { productsData } from '../../assets/data/productsData'

export default function Catalog() {
  return (
    <div>
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
