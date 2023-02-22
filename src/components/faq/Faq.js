import React, { useEffect, useState } from 'react'
import './Faq.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Faq({num}) {

    const [showLess, setShowLess] = useState(false)

    return (
    <div className='faq-item-block'>
          <ul className='faq-ul'>
              <li style={{height: showLess ? '100%': '30px'}}>
                  <div className="faq-item-title">
                      <h3>Какой-то вопрос {num}</h3>
                      {
                        showLess ? 
                        <AiOutlineCloseCircle onClick={() => setShowLess(!showLess)}  />:
                        <AiOutlinePlus onClick={() => setShowLess(!showLess)} />
                      }
                  </div>
                  <p>
                      Итак, мы можем подвести итог, что современные технологии, и компьютеры в частности, имеют как положительные, так и отрицательные последствия для жизни людей. А для того, чтобы жить в гармонии люди должны найти правильный баланс. Они должны помнить, что компьютер изначально был создан, чтобы помочь людям, сделать их жизнь легче, а не разрушить ее.
                  </p>
              </li>
          </ul>
    </div>
  )
}
