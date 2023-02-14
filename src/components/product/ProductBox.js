import React, { useEffect, useReducer} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ProductBox.css'

export default function ProductBox({product}) {
    const navigateToProductPage = useNavigate()
    const {id, title, lessDescr, price, catalog, thumbnail, count} = product

    const initialImageState = {
        imageIsLoading: false,
        imageIsError: false,
        imageData: ''
    }

    const imageLoadingReducerFunc = (state, action) => {
        switch (action.type) {
            case 'isLoading':
                return {
                    ...state,
                    imageIsLoading: true,
                    imageIsError: false
                }
            case 'isError':
                return {
                    ...state,
                    imageIsLoading: false,
                    imageIsError: true
                }
            case 'isSucces':
                return {
                    imageIsLoading: false,
                    imageIsError: false,
                    imageData: action.payload
                }
        }
    }

    const [imageState, imageDispatch] = useReducer(imageLoadingReducerFunc, initialImageState)
    const {imageIsLoading, imageIsError, imageData} = imageState

    useEffect(() => {
        imageDispatch({type: 'isLoading'})
        const imageLoadingPromise = new Promise((resolve) => {
            return resolve(require(`../../assets/images/product-images/${thumbnail}`))
        })
        imageLoadingPromise
        .then(image => imageDispatch({type: 'isSucces', payload: image}))
        .catch(err => imageDispatch({type: 'isError'}))
    }, [])

  return (
    <div className='product-box'>
        <div className="product-image">
            {
                imageIsLoading ? <img src={require('../../assets/images/product-images/product-image-loading.gif')} alt="Loading gif" />:
                imageIsError ? <img src={require('../../assets/images/product-images/local-file-not-found.png')} alt="image is not available" />:
                <img src={imageData} alt="Product image" />
            }
        </div>
        <div className="product-title">
            <p>{title}</p>
        </div>
        <div className="product-descr">
            <span>{lessDescr}</span>
        </div>
        <div className="product-price">
            <p>{price}</p>
        </div>
        <div className="product-buttons">
            <a className='product-button link-button' href={`/catalog/${product.catalogEn}/${id}/${title}`}>Подробнее</a>
            <button className='product-button shop-button'>В корзину</button>
        </div>
    </div>
  )
}
