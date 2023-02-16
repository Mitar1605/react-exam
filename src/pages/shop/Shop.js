import React, {useContext, useEffect, useReducer, useState} from 'react'
import './Shop.css'
import { CartDataContext } from '../../App'
import CartItem from '../../components/cart-item/CartItem'

export default function Shop() {

    const {cartData, setCartData} = useContext(CartDataContext)
    const [itogo, setItogo] = useState(0)

    
    const deleteItem = (id) => {
        if (cartData.length === 1) setItogo(0)
        setCartData(cartData.filter(el => el.id !== id))
    }

    return (
    <div className='shop-main'>
        <div className="shop-banner">
            <h1>Корзина</h1>
        </div>
        <div className="shop-content">
            <div className="shop-content-container">
                <div className="shop-table">
                    <table>
                        <thead>
                            <tr>
                                <th className='title-th'>ТОВАР</th>
                                <th>ЦЕНА</th>
                                <th>КОЛИЧЕСТВО</th>
                                <th>ПОДЫТОГ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartData.length === 0 ? <h1>Корзина пустой</h1>:
                                cartData.map(product => {
                                    return (
                                        <tr key={product.id}>
                                            <CartItem product={product} deleteItem={deleteItem} setItogo={setItogo} />
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </table>
                </div>
                <div className="shop-buy">
                    <div className="shop-buy-title">
                        <h1>СУММА ЗАКАЗОВ</h1>
                    </div>
                    <div className="shop-buy-itog">
                        <h3>Итого</h3>
                        <h2>{itogo}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
