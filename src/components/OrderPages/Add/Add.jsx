import React, {useState} from 'react'
import style from './Add.module.scss'
import clear_input from '../../../assets/img/clear_input.svg'
import Navigation from '../Navigation/Navigation'
import YourOrder from '../YourOrder/YourOrder'
import btn from '../OrderPages.module.scss'
import RadioInput from '../RadioInput/RadioInput'
import ChexBoxInput from '../CheckBoxInput/CheckBoxInput'


const carsColors = [
    { name: 'Любой', id: 'all' },
    { name: 'Красный', id: 'red' },
    { name: 'Голубой', id: 'light-blue' }
]
const tarifs = [
	{ name: 'Поминутно', price: '7₽/мин', id: 'minute' },
	{ name: 'На сутки', price: '1999 ₽/сутки', id: 'daily' },
]
const additions = [
	{ name: 'Полный бак', price: '500р', id: 'tank' },
	{ name: 'Детское кресло', price: '200р', id: 'chair' },
	{ name: 'Правый руль', price: '1600р', id: 'wheel' },
]

let Add = () => {   

    const [fromDate, setFromDate] = useState('')
	const [toDate, setToDate] = useState('')
    let nextPage = true
    const [colorCar, setColorCar] = useState('Любой')
    const [tarifCar, setTarifCar] = useState('Поминутно 7₽/мин')
    const [additionCar, setAdditionCar] = useState([])

	const clearFrom =
		fromDate.length > 0 ? style.show_close : style.hidden_close
    const clearTo =
		toDate.length > 0 ? style.show_close : style.hidden_close

	const unclokedIndexes = nextPage ? [0, 1, 3] : [0, 1]
	let buttonClass, link;
    if(nextPage){
        buttonClass = btn.orderBtn
        link = "/orderPages/final"
    } else {
        buttonClass = btn.orderBtn + ' ' + btn.orderBtn_disable
    }

    const handleSelectChangeColor = event => {
        const value = event.target.value;
        setColorCar(value);
    };
    const handleSelectChangeTarif = event => {
        const value = event.target.value;
        setTarifCar(value);
    };
    const handleSelectChangeAdditions = event => {
        if(event.target.checked){
            setAdditionCar([
                ...additionCar, {
                    name:  event.target.name,
                    check: event.target.checked
                } 
            ])
            console.log(true)
        } else {
            setAdditionCar([])
        }
    };
    
    let checkBox = document.querySelectorAll('input[type=checkbox]:checked');

    return(
        <>
        <Navigation activeIndex={2}
					unlockedIndexes={unclokedIndexes}
         />
        <div className={style.main_order}>
            <div className={style.add_container}>
                <p>Цвет</p>
                
                <div className={style.radio}>
                    <div className={style.color_item}>
                        {carsColors.map((color) => (
                            <RadioInput id={color.id}  key={color.id} value={color.name} select={colorCar} func={event => handleSelectChangeColor(event)}/>
                        ))}
                    </div>
                    
                </div> 
                <p>Дата аренды</p>
                <div className={style.inputs}>
                    <div>
                        <div className={style.city}>
                            <p>С</p>
                            <input 
                                type="text" 
                                name="city" 
                                id="city"  
                                placeholder="Введите дату и время..." 
                                value={fromDate}
								onChange={(e) => setFromDate(e.target.value)}
                            />
                            <img src={clear_input} className={clearFrom}  onClick={() => setFromDate('')} alt="clear_input" />
                        </div>
                        <div className={style.point}>
                            <p>По</p>
                            <input 
                                type="text" 
                                name="point" 
                                id="point" 
                                placeholder="Введите дату и время..." 
                                value={toDate}
								onChange={(e) => setToDate(e.target.value)}
                            />
                            <img src={clear_input} className={clearTo} onClick={() => setToDate('')} alt="clear_input" />
                        </div>
                    </div>
                </div>
                <p>Тариф</p>
                <div className={style.radio_tarif}>
                    {tarifs.map((tarif) => (
                        <div key={tarif.id}>
                            <RadioInput  id={tarif.id} value={tarif.name + ' ' + tarif.price} select={tarifCar} func={event => handleSelectChangeTarif(event)}/>
                        </div>
                    ))}
                </div>
                <p>Доп услуги</p>
                <div className={style.add_services}>
                    {additions.map((addition) => (
                        <div key={addition.id}>
                            
                            <ChexBoxInput name={addition.name} checked={setAdditionCar[addition.name]} onChange={handleSelectChangeAdditions} />
                        </div>
                    ))}
                </div>
            </div>
            <YourOrder color={colorCar} fromDate={fromDate} toDate={toDate} tarifCar={tarifCar} addition={additionCar} textBtn='Итого' buttonClass={buttonClass} link={link} />
        </div>
        </>
    )
}

export default Add