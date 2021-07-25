import React, {useEffect, useState} from 'react'
import style from './Location.module.scss'
import btn from '../OrderPages.module.scss'
import clear_input from '../../../assets/img/clear_input.svg'
import map from '../../../assets/img/map.jpg'
import Navigation from '../Navigation/Navigation'
import YourOrder from '../YourOrder/YourOrder'
import {API, HEADER} from '../../../config';

let Location = () => {
    let [nextPage, setNextPage] = useState(false)
	const unclokedIndexes = nextPage ? [1] : [0]

    const [itemCity, setCity] = useState('');
    const [itemAddress, setAddress] = useState('');
    let [ListCity, setCityList] = useState([]);
    let [ListAddress, setAddressList] = useState([]);

    useEffect((itemCity, itemAddress) => { 
        try {
            fetch(`${API}city`, 
            {
                method: "get",
                headers: HEADER,
                
                dataType: 'json'
                
            }).then((response) => {
                return response.json();
            }).then(data => {
                setCityList(data.data)
                console.log(data.data)
            })
        } catch(err) {
            console.log('error', err)
        } 

        try {
            fetch(`${API}point`, 
            {
                method: "get",
                headers: HEADER,
                
                dataType: 'json'
                
            }).then((response) => {
                return response.json();
            }).then(data => {
                setAddressList(data.data);
            })
        } catch(err) {
            console.log('error', err)
        } 
    
    }, [itemCity, itemAddress])

    const clearCity =
        itemCity.length > 0 ? style.show_close : style.hidden_close
	const clearAddress =
        itemAddress.length > 0 ? style.show_close : style.hidden_close
        
    const setAddressValue = (value) => {
        setAddress(value.target.value);
        setNextPage(true)
    }
    const setCityValue = (value) => {
        setCity(value.target.value)
        setAddress('');
    }
    let buttonClass, link;
    if(nextPage && itemAddress){
        buttonClass = btn.orderBtn
        link = "/orderPages/model"
    } else {
        buttonClass = btn.orderBtn + ' ' + btn.orderBtn_disable
    }
    
    return(
        <>
        <Navigation activeIndex={0}
					unlockedIndexes={unclokedIndexes}
         />
        <div className={style.main_order}>
            <div className={style.location}>
                <div className={style.inputs}>
                    <div>
                        <div className={style.city}>
                            <p>Город</p>
                            <input 
                                type="text" 
                                name="city" 
                                id="city" 
                                list='select-city' 
                                placeholder="Начните вводить город..." 
                                value={itemCity} 
                                onChange={event => setCityValue(event)}
                            />
                            <datalist id='select-city'>
                                {ListCity.map(item => {
                                    return <option key={item.id} id={item.id} value={item.name} />
                                }) }
                            </datalist>
                            <img src={clear_input} className={clearCity} alt="clear_input" onClick={() => {setCity(''); setAddress('')}}/>
                        </div>
                        <div className={style.point}>
                            <p>Пункт выдачи</p>
                            <input 
                                type="text" 
                                name="point" 
                                id="point" 
                                list='select-address'
                                placeholder="Начните вводить пункт..." 
                                value={itemAddress}
                                onChange={event => setAddressValue(event)}
                            />
                            <datalist id='select-address'>
                                {ListAddress.map((item) => {    
                                    if(!!item.cityId){
                                        if (itemCity === item.cityId.name){
                                            return <option key={item.id} value={item.address} />
                                        }
                                    }  
                                })}
                            </datalist>
                            <img src={clear_input} className={clearAddress} alt="clear_input" onClick={() => setAddress('')} />
                        </div>
                    </div>
                </div>
                <div className={style.map}>
                    <p>Выбрать на карте:</p>
                    <img src={map} alt="map" />
                </div>
            </div>
            <YourOrder city={itemCity} address={itemAddress} textBtn='Выбрать модель' buttonClass={buttonClass} link={link} />
        </div>
        </>
    )
}


export default Location