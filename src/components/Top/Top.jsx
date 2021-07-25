import React from 'react'
import style from './Top.module.scss'
import logo from '../../assets/img/location.svg'
import { NavLink } from 'react-router-dom'

const  Top = () => {
    return (
       
        <div className={style.top}>
            <NavLink to="/" style={{textDecoration: "none"}}> 
                <h2 className={style.top_logo}>
                    Need for drive
                </h2>
            </NavLink>
            <div className={style.location}>
                <img src={logo} alt="" />
                <p  className={style.location_city}>Ульяновск</p>
            </div>
        </div>
            
    )

}

export default  Top