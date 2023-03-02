import React, {useContext, useState, useReducer, useEffect} from 'react'
import './CatalogProductPage.css'
import { CartDataContext } from '../../../App'
import { productsData } from '../../../assets/data/productsData'
import { Link, useParams, useLocation } from 'react-router-dom'
import ProductBox from '../../../components/product/ProductBox'


export default function CatalogProductPage() {
    const {pathname} = useLocation()

    const topProducts = []

    if (topProducts.length === 0) {
        for (let i = 0; i < 3; i++) {
            
            let maxRatingProduct = productsData[0].rating !== 0 ? {id: -1, rating: -1}: productsData[0] 
    
            productsData.forEach((product) => {
                if (product.rating >= maxRatingProduct.rating) {
                    if (topProducts.some(topProduct => product.id === topProduct.id) === false) {
                        maxRatingProduct = product
                    }
                }
            })
    
            if (!topProducts.find(el => el.id === maxRatingProduct.id)) {
                topProducts.push(maxRatingProduct)
            }
    
        }
    }


    const {cartData, setCartData} = useContext(CartDataContext)
    const {productId} = useParams()
    const [addCart, setAddCart] = useState(productsData.find(el => el.id === +productId).count > 0)

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
    const {id, title, lessDescr, price, catalog, catalogEn, thumbnail, count} = product
    
    useEffect(() => {
        dispatch({type: 'isLoading'})
        const getData = new Promise((resolve) => {
            return resolve(productsData.find(el => el.id === +productId))
        })
        getData
        .then(data => dispatch({type: 'isSucces', payload: data}))
        .catch(err => dispatch({type: 'isError'}))
    }, [pathname])
    

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
            productsData.find(el => el.id === +productId).count = 1
        }
        if (addCart) {
            setCartData(cartData.filter(el => el.id !== id))
            setAddCart(false)
            productsData.find(el => el.id === +productId).count = 0
        }
    }

  return (
      <div className='product-page__main'>
          <div className="product-page__product">
              <div className="product-page__product-container">
                  <div className="product__link">
                      <p><Link to='/catalog'>Каталог</Link> / <Link to={`/${catalogEn}`}>{catalog}</Link> / <span>{title}</span></p>
                  </div>
                  {
                      isLoading ? <div className="loader-div"><div className='loader'></div></div> :
                          isError ? <h1>Ohh, something went wrong!!</h1> :
                              <div className='product-descr'>
                                  <div className="product-descr__image">
                                      <img src={require(`../../../assets/images/product-images/img-${productId}.png`)} alt={title} />
                                  </div>
                                  <div className="product-description">
                                      <div className="product-description-title">
                                          <h2>{title}</h2>
                                      </div>
                                      <div className="product-description-price">
                                          <span>{price}</span>
                                      </div>
                                      <div className="product-description-recycle">
                                          <button onClick={addToCart}>{!addCart ? 'В корзину': 'Доб. в карзину'}</button>
                                      </div>
                                      <div className="product-description-descr">
                                          <ul>
                                              <li>— 3-х слойное антипригарное покрытие</li>
                                              <li>— Толщина дна 5 мм</li>
                                              <li>— Температура нагревания 230 °C </li>
                                          </ul>
                                          <p>
                                              Соблюдение определённых ограничений в рационе вовсе не означает, что вы должны исключить из ежедневного меню все ваши любимые продукты и отдать предпочтение невкусной, но полезной пище.
                                              <br /><br />
                                              Вкусная и полезная пища необходима для здоровья и работоспособности человека. Специалисты говорят, что ежедневная зарядка, много воды и полезной пищи сделают и из обезьяны человека.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                  }
              </div>
          </div>
          <div className="top-products-block">
              <div className="top-products-block-title">
                  <h1>Популярные товары</h1>
              </div>
              <div className="top-product-block-products">
                {
                    topProducts.map(product => {
                        return (
                            <div key={product.id}>
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
