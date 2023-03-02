import React, { useContext, useEffect, useReducer, useState} from 'react'
import { Link } from 'react-router-dom'
import { CartDataContext } from '../../App'
import emptyStar from '../../assets/icons/empty_star.png'
import star from '../../assets/icons/star.png'
import './ProductBox.css'

export default function ProductBox({product}) {

    const {cartData, setCartData} = useContext(CartDataContext)
    
    const {id, title, lessDescr, price, rating, catalogEn, thumbnail, count} = product
    
    const [starState, setStarState] = useState(rating)
    const [starRatingState, setStarRatingState] = useState(rating)

    useEffect(() => {
        product.rating = starRatingState
    }, [starRatingState])

    const [addCart, setAddCart] = useState(count > 0)

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

    const addToCart = () => {

        const initialItem = cartData.find(el => el.id === id)
        if (!initialItem && !addCart) {
        setCartData([
            ...cartData,
            {
                id: id,
                title: title,
                thumbnail: thumbnail,
                lessDescr: lessDescr,
                price: price.slice(0, price.indexOf('₽') - 1).replace(' ', ''),
                count: 1 
            }]
            )
            setAddCart(true)
            product.count = 1
        }
        if (addCart) {
            setCartData(cartData.filter(el => el.id !== id))
            setAddCart(false)
            product.count = 0
        }
        
    }

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
            <div className="product_rating" onMouseLeave={() => setStarState(starRatingState)}>
                {
                    new Array(5).fill('').map((el, i) => {
                        
                        return (
                            <div key={i}>
                                <img 
                                    src={starState > i ? star: emptyStar} 
                                    alt="star" 

                                    onMouseEnter={() => setStarState(i + 1)} 

                                    onClick={() => setStarRatingState(starState)} 
                                />
                            </div>
                        )
                    })
                }
                <p>{starRatingState}</p>
            </div>
        </div>
        <div className="product-buttons">
            <Link className='product-button link-button' to={`/catalog/${product.catalogEn}/${id}/${title}`}>Подробнее</Link>
            <button className='product-button shop-button' onClick={addToCart} >{!addCart ? 'В корзину': 'Доб. в карзину'}</button>
        </div>
    </div>
  )
}
