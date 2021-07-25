import React, {useState} from 'react'
import style from './Navbar.module.scss'
import burger from '../../assets/img/menu_btn.svg'
import burgerMobile from '../../assets/img/menu_btn_mobile.svg'
import close from '../../assets/img/close.svg'
import telegram from '../../assets/img/telegram.svg'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'


const  Navbar = () => {

    const [menuOpened, setMenuOpened] = useState(false)

    let menuClass
    if(!menuOpened){
      menuClass = style.closed
    } else {
      menuClass = style.opened
    }
    let clickMenu = () => { 
      !menuOpened ? setMenuOpened(true) : setMenuOpened(false)
    }
    return (
      <>
        <img src={burgerMobile} className={style.btnMenuMobile} alt="burger menu" onClick = {() => clickMenu()} />
        <nav className={style.burger} >
          <img src={burger} className={style.btnMenu} alt="burger menu" onClick = {() => clickMenu()} />
          
          <div className={style.language}>
            <p>Eng</p>
          </div>
        </nav>
        <div className={style.menu + ' ' + menuClass}> 
                    
            <div className={style.black_container }>
              <div className={style.close}>
                <img src={close}  alt="close"  onClick = {() => clickMenu()} />
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
              <div className={style.language_mobile}>
                Eng
              </div> 
            </div>
            <div className={style.op_container}></div>
          </div>
      </>
    )

}

export default  Navbar