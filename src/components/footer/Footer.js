import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-address">
                    <img src={require('../../assets/images/footer-logo.png')} alt="logo" />
                    <p>Товары для дома с заботой о Вас!</p>
                    <span>г. Санкт-Петербург <br /> Пулковское шоссе, д.9, корп.3, лит.А, оф.231</span>
                    <a href='tel:8 800 000 0000'>8 800 000 0000</a>
                    <a href='mailto:pochta@mail.ru'>pochta@mail.ru</a>
                </div>
                <div className="footer-navigate-main">
                    <div className="footer-navigate">
                        <div className="footer-navigate-item footer-navigate-1">
                            
                            <h4>Меню</h4>

                            <ul>
                                <li><NavLink to='/catalog'>Каталог</NavLink></li>
                                <li><NavLink to='/shop'>Корзина</NavLink> <AiOutlineShoppingCart /></li>
                                <li><NavLink to='/Tips&Recipes'>Советы и рецепты</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-navigate-item footer-navigate-2">
                            
                            <h4>Продукция</h4>

                            <ul>
                                <li><NavLink to='/catalog-kitchen'>SATE Все для кухни</NavLink></li>
                                <li><NavLink to='/catalog-coffee'>SATE Кофейное удовольствие</NavLink></li>
                                <li><NavLink to='/catalog-electronics'>SATE Electronics</NavLink></li>
                                <li><NavLink to='/catalog-clean'>SATE Чистый дом</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
