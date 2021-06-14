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
            <h1 className={style.title}>
                Каршеринг
                <br />
                <span>
                    Need for drive
                </span>
            </h1>
            <p className={style.text}>
                Поминутная аренда авто твоего города
            </p>
            <button className={style.btn}>
                Забронировать
            </button>
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