import React from 'react'
import style from './Main.module.scss'
import Top from '../Top/Top'
import { NavLink } from 'react-router-dom'

const  Main = () => {
    return (
        <div className={style.main}>
            <Top />
            <div className={style.content}>
                <div className={style.title}>
                    <p>Каршеринг</p> 
                    <h1>Need for drive</h1>
                </div>
                
                
                <p className={style.text}>
                    Поминутная аренда авто твоего города
                </p>
                <NavLink to="/orderPages/location" >
                    <button className={style.btn}>
                        Забронировать
                    </button>
                </NavLink>
            </div>
            
            <div className={style.footer}>
                <div className={style.copy}>
                    © 2016-2019 «Need for drive»
                </div>
                <a className={style.phone} href="tel:+84952342244">8 (495) 234-22-44</ a>  
            </div>
            
        </div>
    )

}

export default  Main