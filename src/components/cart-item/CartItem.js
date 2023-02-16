import React, { useContext, useEffect, useState } from 'react'
import './CartItem.css'
import {AiOutlineClose} from 'react-icons/ai'
import { CartDataContext } from '../../App'

export default function CartItem({product, deleteItem, setItogo}) {
    const {cartData, setCartData} = useContext(CartDataContext)
    const {id, title, price, thumbnail, count} = product
    const [calcCount, setCalcCount] = useState(count)
    
    useEffect(() => {
        product.count = calcCount
        product.paditog = +price * calcCount
        setItogo(cartData.reduce((aggr, el) => aggr + el.paditog, 0))

        console.log(cartData);
    }, [cartData, calcCount])
    

    const plusCount = () => {
        setCalcCount(() => calcCount + 1)
    }
    
    const minusCount = () => {
        setCalcCount(() => calcCount - 1)
        if (calcCount < 2) deleteItem(id)
    }

    
  return (
    <>
        <td className='title-td'>
            <AiOutlineClose onClick={() => deleteItem(id)} />
            <img src={require(`../../assets/images/product-images/${thumbnail}`)} alt="product image" />
            {title}
        </td>   
        <td>{price} ₽</td>   
        <td>
            <button className='button' onClick={minusCount}>-</button>
            <input type="number" value={calcCount} onChange={(e) => setCalcCount(e.target.value)}/>
            <button className='button' onClick={plusCount}>+</button>
        </td>   
        <td>{+price * calcCount} ₽</td>
    </>
  )
}
