import React from 'react'
import './Call.css'
import {AiOutlineClose} from 'react-icons/ai'

export default function Call({showCall, setShowCall}) {

    const closeCallFunc = () => {
        setShowCall(false)
    }

  return (
    <div className="call_container" style={{visibility: showCall ? 'visible': 'hidden'}}>
        <form action='https://formspree.io/f/moqzdvka' method="POST">
            <div className="close_btn">
                <AiOutlineClose onClick={closeCallFunc} />
            </div>
            <h4>Оставьте свою номер, мы свяжемся с вами</h4>
            <input type="number" name='tel:' placeholder='тел:' />
            <input type="submit" id="submit" value='Отправить' />
        </form>
    </div>
  )
}
