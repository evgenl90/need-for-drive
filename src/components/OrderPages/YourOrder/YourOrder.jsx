import React from 'react'
import style from './YourOrder.module.scss'
import { NavLink } from 'react-router-dom'

let YourOrder = (props) => {

    return(
        <div className={style.container}> 
            <h3>Ваш заказ:</h3>
            {props.address && props.city ? (
                <div className={style.price}>
                    <p className={style.key}>Пункт Выдачи</p>
                    <div className={style.line}></div>
                    <p className={style.value}>{props.city}, {props.address}</p>
                </div>
            ) : ''
            }
            
            {props.activeModel ? (
                <>
                    <div className={style.price}>
                        <p className={style.key}>Модель</p>
                        <div className={style.line}></div>
                        <p className={style.value}>{props.activeModel}</p>
                    </div>
                    <h4>Цена: от {props.price.priceMin} до {props.price.priceMax} ₽</h4>
                </>
            ) : ''
            }
            {props.color ? (
                <div className={style.price}>
                    <p className={style.key}>Цвет</p>
                    <div className={style.line}></div>
                    <p className={style.value}>{props.color}</p>
                </div>
            ) : ''
            }
            {props.fromDate && props. toDate ? (
                <div className={style.price}>
                    <p className={style.key}>Длительность</p>
                    <div className={style.line}></div>
                    <p className={style.value}>С {props.fromDate} по {props.toDate}</p>
                </div>
            ) : ''
            }
            {props.tarifCar  ? (
                <div className={style.price}>
                    <p className={style.key}>Тариф</p>
                    <div className={style.line}></div>
                    <p className={style.value}>{props.tarifCar.split(' ').length == 2 ? props.tarifCar.split(' ')[0] : props.tarifCar.split(' ')[0] + ' ' + props.tarifCar.split(' ')[1]}</p>
                </div>
            ) : ''
            }

            {props.addition  ? (
                props.addition.map(item => {
                    if(!!item.check){
                        return (
                            <div className={style.price} key={item.name}>
                                <p className={style.key}>{item.name}</p>
                                <div className={style.line}></div>
                                <p className={style.value}>{item.check ? 'Да' : ''}</p>
                            </div>
                        )
                    }    
                })
            ) : ''
            }

            {props.link ? (
                <NavLink to={props.link}>
                <button className={props.buttonClass}>{props.textBtn}</button>
            </NavLink>
            ) : <button className={props.buttonClass}>{props.textBtn}</button>
            }
            
            
        </div>
    )
}

export default YourOrder