import React, { useEffect, useReducer, useRef, useState } from 'react'
import '../Catalog.css'
import './CatalogClean.css'
import ProductBox from '../../../components/product/ProductBox'
import { Link, useSearchParams } from 'react-router-dom'
import { productsData } from '../../../assets/data/productsData'
import {HiOutlineSearch} from 'react-icons/hi'

export default function CatalogClean() {

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
            return resolve(productsData.filter(el => el.catalogEn === 'catalog-clean'))
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
        <div className="catalog-banner-catalogs">
            <span><Link to='/catalog'>??????????????</Link> / <Link className='second-link-banner' to='/catalog-clean'>SATE ???????????? ??????</Link></span>
            <h1>SATE ???????????? ??????</h1>
            <p>???????????????? ?????????????????????? ???????? ?????????? ???? ?????????????????????? ???????????? ???????????????? ???? ??????????????, ???????????? ?? ?????????????? ?????????????? ????????????.</p>
        </div>
        <div className="catalog-container">
            <div className="catalog-search-block">
                <span>????????????</span>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    onSearch(searchInputValue)
                }}>
                    <input type="text" placeholder='??????????' onChange={(evt) => searchInputValue.current = evt.target.value} />
                    <HiOutlineSearch onClick={() => onSearch(searchInputValue)}/>
                </form>
            </div>

            {
                isLoading ? <div className="loader-div"><div className='loader'></div></div>: ''
            }
            <div className="catalog-products-block">
                {
                    
                    isError ? <h1>Ohh, Something went wrong!!!</h1>:
                    showData.length === 0 ? <h1>???????????????? ???????????? ???? ??????????????</h1>:
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
