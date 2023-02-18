import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function Header({showCallFunc, cartData}) {
  return (
      <header>
          <div className="header__container">
              <div className="header__content">
                  <div className="header__content-logo">
                      <NavLink to='/'>
                          <img src={require('../../assets/images/logo.png')} alt="Logo" />
                      </NavLink>
                  </div>
                  <div className="header__content-navigate">
                      <nav>
                          <ul>
                              <li className='header-drop-li'><NavLink to="/catalog">Каталог <img src={require('../../assets/icons/arrow-down.png')} alt="arrow-down" /></NavLink>
                                    <ul className="header__drop-ul">
                                        <li className="header__nav-ul-li header__nav-drop-ul-li"><NavLink to="/catalog-kitchen" className="header__nav-ul-li-a">SATE Все для кухни</NavLink></li>
                                        <li className="header__nav-ul-li header__nav-drop-ul-li"><NavLink to="/catalog-coffee" className={"header__nav-ul-li-a"}>SATE Кофейное удовольствие</NavLink></li>
                                        <li className="header__nav-ul-li header__nav-drop-ul-li"><NavLink to="/catalog-electronics" className={"header__nav-ul-li-a"}>SATE Electronics</NavLink></li>
                                        <li className="header__nav-ul-li header__nav-drop-ul-li"><NavLink to="/catalog-clean" className={"header__nav-ul-li-a"}>SATE Чистый дом</NavLink></li>
                                    </ul>
                                </li>
                              <li><NavLink to="/shop">Корзина</NavLink><AiOutlineShoppingCart /> <span>{cartData.length}</span></li>
                              <li><NavLink to="/">Оплата и доставка</NavLink></li>
                              <li><NavLink to="/">Сервис</NavLink></li>
                              <li><NavLink to="/Tips&Recipes">Советы и рецепты</NavLink></li>
                          </ul>
                      </nav>
                  </div>
                  <div className="header__content-call">
                      <button onClick={showCallFunc}>Заказать звонок</button>
                  </div>
              </div>
          </div>
      </header>
  )
}
