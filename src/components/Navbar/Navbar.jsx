import React from 'react'
import style from './Navbar.module.scss'
import burger from '../../assets/img/menu_btn.svg'
import close from '../../assets/img/close.svg'
import telegram from '../../assets/img/telegram.svg'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'

const  Navbar = () => {

    return (
        <nav className={style.burger} >
          <img src={burger} alt="burger" />
          <div className={style.language}>
            <p>Eng</p>
          </div>

          <div className={style.menu}>         
            <div className={style.black_container}>
              <div className={style.close}>
                <img src={close}  alt="close" />
              </div>
              <div className={style.link}>
                <div>
                  <a href="#" className={style.item}>ПАРКОВКА</a>
                </div>
                <div>
                  <a href="#" className={style.item}>СТРАХОВКА</a>
                </div>
                <div>
                  <a href="#" className={style.item}>БЕНЗИН</a>
                </div>
                <div>
                  <a href="#" className={style.item}>ОБСЛУЖИВАНИЕ</a>
                </div>
              </div>
              <div className={style.social}>
                <img src={telegram} className={style.item} alt="telegram" />
                <img src={facebook} className={style.item} alt="facebook" />
                <img src={instagram} className={style.item} alt="instagram" />
              </div>
            </div>
            <div className={style.op_container}></div>
            
          </div>
        </nav>
    )

}

export default  Navbar