import React from 'react'
import style from './Main.module.scss'
import logo from '../../assets/img/location.svg'

const  Main = () => {
    return (
        <div className={style.main}>
            <div className={style.top}>
                <h2 className={style.top_logo}>
                    Need for drive
                </h2>
                <div className={style.location}>
                    <img src={logo} alt="" />
                    <p  className={style.location_city}>Ульяновск</p>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    <p>Каршеринг</p> 
                    <h1>Need for drive</h1>
                </div>
                
                
                <p className={style.text}>
                    Поминутная аренда авто твоего города
                </p>
                <button className={style.btn}>
                    Забронировать
                </button>
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