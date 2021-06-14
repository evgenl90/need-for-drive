import React from 'react'
import style from './Slider.module.scss'
import prev from '../../assets/img/prev.svg'
import next from '../../assets/img/next.svg'

const  Slider = () => {
    return (
        <div className={style.slider}>
            <div className={style.prev}></div>
            <img src={prev} className={style.arrow_prev} alt="prev" />
            
            <h2 className={style.slider_title}>
                Бесплатная парковка
            </h2>
            <p className={style.slider_text}>
                Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
            </p>
            <button className={style.slider_btn}>
                Подробнее
            </button>

            <div className={style.next}></div>
            <img src={next} className={style.arrow_next} alt="next" />

            <div className={style.radio_control}>
                <div className={style.item}></div>
                <div className={`${style.item} ${style.active}`}></div>
                <div className={style.item}></div>
                <div className={style.item}></div>
            </div>
        </div>
    )

}

export default  Slider