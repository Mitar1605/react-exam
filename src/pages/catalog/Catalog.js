import React, { useEffect, useReducer, useRef, useState } from 'react'
import './Catalog.css'
import ProductBox from '../../components/product/ProductBox'
import { useSearchParams } from 'react-router-dom'
import { productsData } from '../../assets/data/productsData'
import {HiOutlineSearch} from 'react-icons/hi'

export default function Catalog() {

    const searchInputValue = useRef('')
    
    const initialProductState = {
        isLoading: false,
        isError: false,
        data: []
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
                    data: action.payload
                }
            }
        }
        
    const [showData, setShowData] = useState([])
    const [productState, dispatch] = useReducer(productReducerFunc ,initialProductState)
    const {isLoading, isError, data} = productState
    
    useEffect(() => {
        dispatch({type: 'isLoading'})
        const getData = new Promise((resolve) => {
            return resolve(productsData.filter(el => el.catalogEn !== 'catalog-electronics'))
        })
        getData
        .then(data => {
            dispatch({type: 'isSucces', payload: data})
            setShowData(data)
        })
        .catch(err => dispatch({type: 'isError'}))
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()
    
    function onSearch(inputValue) {
        setShowData(data.filter(el => el.title.toLowerCase().includes(inputValue.current.toLowerCase())))
        setSearchParams({key: inputValue.current})
    }
    
  return (
    <div className='catalog__main'>
        <div className="catalog-banner">
            <img src={require('../../assets/images/catalog-banner-img.png')} alt="banner img" />
            <p>КАКОЙ-ТО ПРОМО БАННЕР <br /> НОВИНКИ ИЛИ АКЦИИ</p>
            <button className='button'>Узнать подробнее</button>
        </div>
        <div className="catalog-container">
            <div className="catalog__title">
                <h1>КАТАЛОГ ПРОДУКЦИИ</h1>
            </div>
            <div className="catalog-search-block">
                <span>Фильтр</span>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    onSearch(searchInputValue)
                }}>
                    <input type="text" placeholder='Поиск' onChange={(evt) => searchInputValue.current = evt.target.value} />
                    <HiOutlineSearch onClick={() => onSearch(searchInputValue)}/>
                </form>
            </div>

            {
                isLoading ? <div className="loader-div"><div className='loader'></div></div>: ''
            }
            <div className="catalog-products-block">
                {
                    
                    isError ? <h1>Ohh, Something went wrong!!!</h1>:
                    showData.length === 0 ? <h1>Простите нечего не нашлось</h1>:
                    showData.map(product => {
                        return (
                            <div className="catalog-product" key={product.id}>
                                <ProductBox product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
