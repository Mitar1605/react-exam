import React from 'react'
import './HomePage.css'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='home-page-main'>
      <div className="homepage-main-block">
        <div className="homepage-main-block-background-color">
          <div className="homepage-main-block__container">
            <div className="homepage-main-block-content">
              <h1>
                Товары для дома <br /> с заботой о Вас!
              </h1>
              <p>
                Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки.
              </p>
              <Link to='/catalog' className='button'>Перейти в каталог</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-second-block">
        <div className="second-block-container">
          <div className="second-block second-block-1">
            <h1>7</h1>
            <p>Лет мы продаем товары для уюта вашего дома</p>
          </div>
          <div className="second-block second-block-1">
            <h1>2 000</h1>
            <p>Заказов ежемесячно обрабатывают менеджеры</p>
          </div>
          <div className="second-block second-block-1">
            <h1>4 278</h1>
            <p>Человек доверились нам</p>
          </div>
        </div>
      </div>

      <div className="homepage-third-block">
        <div className="third-block-container">
          <div className="third-block-item third-block-item-1">
            <img src={require('../../assets/images/homepagecard-logo.png')} alt="logo" />
          </div>
          <div className="third-block-item third-block-item-2">
            <img src={require('../../assets/images/homepagecard-logo.png')} alt="logo" />
          </div>
          <div className="third-block-item third-block-item-3">
            <img src={require('../../assets/images/homepagecard-logo.png')} alt="logo" />
          </div>
          <div className="third-block-item third-block-item-4">
            <img src={require('../../assets/images/homepagecard-logo.png')} alt="logo" />
          </div>
        </div>
      </div>

      <div className="homepage-fourth-block">
        <div className="third-block-container">
          <div className="third-block-content">
            <h1>ХОТИТЕ ПОЛУЧИТЬ СКИДОЧНЫЙ КУПОН НА ПЕРВУЮ ПОКУПКУ?</h1>
            <p>Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде.</p>
            <button className='button'>Получить купон</button>
          </div>
            <img src={require('../../assets/images/homepage-img-5.png')} alt="sale image" />
        </div>
      </div>
    </div>
  )
}
