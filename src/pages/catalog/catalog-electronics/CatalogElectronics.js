import React, { useEffect, useReducer, useRef, useState } from 'react'
import '../Catalog.css'
import './CatalogElectronics.css'
import ProductBox from '../../../components/product/ProductBox'
import { Link, useSearchParams } from 'react-router-dom'
import { productsData } from '../../../assets/data/productsData'
import {HiOutlineSearch} from 'react-icons/hi'
import Faq from '../../../components/faq/Faq'


export default function CatalogElectronics() {

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
            return resolve(productsData.filter(el => el.catalogEn === 'catalog-electronics'))
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
        <div className="catalog-banner-catalogs catalog-electrnoics-banner">
            <span><Link to='/catalog'>Каталог</Link> / <Link className='second-link-banner' to='/catalog-electronics'>SATE Electronics</Link></span>
            <h1>SATE Electronics</h1>
            <p>Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки.</p>
        </div>
        <div className="catalog-container">
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
            <div className="catalog-faq-block">
                <div className="catalog-faq-container">
                    <div className="catalog-faq-title">
                        <h1>FAQ</h1>
                    </div>
                    <div className="catalog-faq-content">
                        <Faq num={1} />
                        <Faq num={2} />
                        <Faq num={3} />
                        <Faq num={4} />
                        <Faq num={5} />
                    </div>
                </div>
            </div>
    </div>
  )
}
