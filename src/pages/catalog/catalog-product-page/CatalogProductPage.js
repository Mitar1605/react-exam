import React, {useReducer, useEffect} from 'react'
import { productsData } from '../../../assets/data/productsData'
import { useParams } from 'react-router-dom'

export default function CatalogProductPage() {

    const {productId} = useParams()

    const initialProductState = {
        isLoading: false,
        isError: false,
        product: {}
    }

    const productReducerFunc = (state, action) => {
        switch (action.type) {
            case 'isLoading':
                return {
                    ...state,
                    isLoading: true,
                    isError: false
                }
            case 'isError':
                return {
                    ...state,
                    isLoading: false,
                    isError: true
                }
            case 'isSucces':
                return {
                    isLoading: false,
                    isError: false,
                    product: action.payload
                }
            }
        }
        
    const [productState, dispatch] = useReducer(productReducerFunc ,initialProductState)
    const {isLoading, isError, product} = productState
    const {id, title, lessDescr, price, catalog, thumbnail, count} = product
    
    useEffect(() => {
        dispatch({type: 'isLoading'})
        const getData = new Promise((resolve) => {
            return resolve(productsData.find(el => el.id === +productId))
        })
        getData
        .then(data => dispatch({type: 'isSucces', payload: data}))
        .catch(err => dispatch({type: 'isError'}))
    }, [])
    
  return (
    <div>
        {
            isLoading ? <h1>Loading...</h1>:
            isError ? <h1>Ohh, something went wrong!!</h1>:
            <div>
                <h1>{title}</h1>
                <h3>{price}</h3>
            </div>
        }
    </div>
  )
}
