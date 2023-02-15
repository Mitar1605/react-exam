import React, { useReducer, useEffect, useRef} from 'react'
import './RecipesPage.css'
import { recipesData } from '../../assets/data/recipesData'
import Recip from '../../components/recip/Recip'

export default function RecipesPage() {

    const initialState = {
        isLoading: false,
        isError: false,
        data: []
    }

    const recipReducerFunc = (state, action) => {
        switch(action.type) {
            case 'isLoading' : 
                return{
                    ...state,
                    isLoading: true,
                    isError: false
                }
            case 'isError':
                return {
                    ...state,
                    isLoading: false,
                    isError: true
                }
            case 'isSucces':
                return {
                    isLoading: false,
                    isError: false,
                    data: action.payload
                }

        }
    }

    const [state, dispatch] = useReducer(recipReducerFunc, initialState)
    const {isLoading, isError, data} = state

    useEffect(() => {
        dispatch({type: 'isLoading'})
        const getData = new Promise((resolve) => {
            return resolve(recipesData)
        })
        getData
        .then(data => dispatch({type: 'isSucces', payload: data}))
        .catch(err => dispatch({type: 'isError'}))
    }, [])

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()

    const refArr = [ref1, ref2, ref3, ref4, ref5]
    
    const isActive = (ref) => {
        refArr.forEach(el => el.current.classList.value = '')
        ref.current.classList.value = 'active'
    }
    
    useEffect(() => {
        ref1.current.classList.value = 'active'
    }, [])

  return (
    <div className='recipes-main'>
        <div className="recipes-tool-block">
            <div className="recipes-tool-container">
                <ul>
                    <li ref={ref1} onClick={() => {isActive(ref1); dispatch({type: 'isSucces', payload: recipesData})}}>Все</li>
                    <li ref={ref2} onClick={() => {isActive(ref2); dispatch({type: 'isSucces', payload: recipesData.filter(el => el.catalog === 'first')})}}>Первые блюда</li>
                    <li ref={ref3} onClick={() => {isActive(ref3); dispatch({type: 'isSucces', payload: recipesData.filter(el => el.catalog === 'second')})}}>Вторые блюда</li>
                    <li ref={ref4} onClick={() => {isActive(ref4); dispatch({type: 'isSucces', payload: recipesData.filter(el => el.catalog === 'salat')})}}>Салаты</li>
                    <li ref={ref5} onClick={() => {isActive(ref5); dispatch({type: 'isSucces', payload: recipesData.filter(el => el.catalog === 'zakuski')})}}>Закуски</li>
                </ul>
            </div>
        </div>
        {
            isLoading ? <div className="loader-div"><div className='loader'></div></div>: ''
        }
        <div className="recipes-block">
            {
                isError ? <h1>Ohh, Something went wrong!</h1>:
                data.map(recip => {
                    return <div key={recip.id}>
                        <Recip recip={recip} />
                    </div>
                })
            }
        </div>
    </div>
  )
}
