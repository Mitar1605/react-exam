import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({setShowBurger}) {
    
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo({top: 0})
        setShowBurger(false)

        switch (pathname) {
          case '/':
            document.title = 'SATE - ТОВАРЫ ДЛЯ ДОМА С ЗАБОТОЙ О ВАС!'
            break;
          case '/catalog':
            document.title = 'SATE - КАТАЛОГ'
            break;
          case '/catalog-kitchen':
            document.title = 'SATE - Все для кухни'
            break;
          case '/catalog-coffee':
            document.title = 'SATE - Кофейное удовольствие'
            break;
          case '/catalog-clean':
            document.title = 'SATE - Electronics'
            break;
          case '/catalog-electronics':
            document.title = 'SATE - Чистый дом'
            break;
          case '/shop':
            document.title = 'SATE - КОРЗИНА'
            break;  
          case '/Tips&Recipes':
            document.title = 'SATE - СОВЕТЫ И РЕЦЕПТЫ'
            break;  
        }
    }, [pathname])

  return null
}
