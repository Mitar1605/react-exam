import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="header__container">
            <div className="header__content">
                <div className="header__content-logo">
                    <img src={require('../../assets/images/logo.png')} alt="Logo" />
                </div>
                <div className="header__content-navigate">
                    <nav>
                        <ul>
                            <li><NavLink to="#">Каталог <img src={require('../../assets/icons/arrow-down.png')} alt="arrow-down" /></NavLink></li>
                            <li><NavLink to="#">О нас</NavLink></li>
                            <li><NavLink to="#">Оплата и доставка</NavLink></li>
                            <li><NavLink to="#">Где купить</NavLink></li>
                            <li><NavLink to="#">Сервис</NavLink></li>
                            <li><NavLink to="#">Советы и рецепты</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__content-call">
                    <button>Заказать звонок</button>
                </div>
            </div>
        </div>
    </header>
  )
}
