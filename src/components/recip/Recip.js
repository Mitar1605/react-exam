import React from 'react'
import './Recip.css'

export default function Recip({recip}) {
  
    const {thumbnail, id, title, lessDescr} = recip

    return (
    <div className='recip-box'>
        <div className="recip-img">
            <img src={require(`../../assets/images/recip-images/${thumbnail}`)} alt="recip img" />
        </div>
        <div className="recip-title">
            <p>{title}</p>
        </div>
        <div className="recip-descr">
            <span>{lessDescr}</span>
        </div>
    </div>
  )
}
