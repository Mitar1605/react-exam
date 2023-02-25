import React, { useContext, useEffect, useState } from 'react'
import './CartItem.css'
import {Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import { CartDataContext } from '../../App'

export default function CartItem({product, deleteItem, setItogo}) {
    const {cartData} = useContext(CartDataContext)
    const {id, title, price, catalogEn, thumbnail, count} = product
    const [calcCount, setCalcCount] = useState(count)
    
    useEffect(() => {
        product.count = +calcCount
        product.paditog = +price * calcCount
        setItogo(cartData.reduce((aggr, el) => aggr + el.paditog, 0))
        if (+calcCount < 1 && calcCount !== '') deleteItem(id)
    }, [cartData, calcCount])
    

    const plusCount = () => {
        setCalcCount(() => +calcCount + 1)
    }
    
    const minusCount = () => {
        setCalcCount(() => +calcCount - 1)
    }

    
  return (
    <>
        <td className='title-td'>
            <AiOutlineClose onClick={() => deleteItem(id)} />
            <Link to={`/catalog/${catalogEn}/${id}/${title}`}>
                <img src={require(`../../assets/images/product-images/${thumbnail}`)} alt="product image" />
                <span>{title}</span>
            </Link>
        </td>   
        <td>{price} ₽</td>   
        <td>
            <button className='button' onClick={minusCount}>-</button>
            <input type="number" value={calcCount} onChange={(e) => setCalcCount(e.target.value)}/>
            <button className='button' onClick={plusCount}>+</button>
        </td>   
        <td className='title-last'>{+price * calcCount} ₽</td>
    </>
  )
}
