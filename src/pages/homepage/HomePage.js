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
              <Link className='button'>Перейти в каталог</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
