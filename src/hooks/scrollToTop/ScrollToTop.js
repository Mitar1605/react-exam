import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({setShowBurger}) {
    
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo({top: 0})
        setShowBurger(false)
    }, [pathname])

  return null
}
