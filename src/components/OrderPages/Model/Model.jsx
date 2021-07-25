import React, { useState } from 'react'
import style from './Model.module.scss'
import elantra from '../../../assets/img/cars/elantra.png'
import i30 from '../../../assets/img/cars/i30.png'
import creta from '../../../assets/img/cars/creta.png'
import sonata from '../../../assets/img/cars/sonata.png'
import Navigation from '../Navigation/Navigation'
import YourOrder from '../YourOrder/YourOrder'
import btn from '../OrderPages.module.scss'
import RadioInput from '../RadioInput/RadioInput'

const cars = [
	{
		priceMax: 25000,
		priceMin: 12000,
		name: 'Elantra',
		thumbnail: elantra,
		description: 'string',
		categoryId: {},
		colors: ['Синий', 'Белый', 'Черный'],
	},
	{
		priceMax: 32000,
		priceMin: 10000,
		name: 'i30 N',
		thumbnail: i30,
		description: 'string',
		categoryId: {},
		colors: ['Голубой', 'Красный', 'Черный'],
	},
	{
		priceMax: 25000,
		priceMin: 12000,
		name: 'Сreta',
		thumbnail: creta,
		description: 'string',
		categoryId: {},
		colors: ['Оранжевый', 'Синий', 'Черный'],
	},
	{
		priceMax: 32000,
		priceMin: 10000,
		name: 'Sonata',
		thumbnail: sonata,
		description: 'string',
		categoryId: {},
		colors: ['Черный', 'Белый', 'Зеленый'],
	},
	{
		priceMax: 25000,
		priceMin: 12000,
		name: 'Elantra',
		thumbnail: elantra,
		description: 'string',
		categoryId: {},
		colors: ['Синий', 'Белый', 'Черный'],
	},
	{
		priceMax: 32000,
		priceMin: 10000,
		name: 'i30 N',
		thumbnail: i30,
		description: 'string',
		categoryId: {},
		colors: ['Голубой', 'Красный', 'Черный'],
	},
    
]
const modelTypes = [
	{ name: 'Все модели', id: 'all' },
	{ name: 'Эконом', id: 'eco' },
	{ name: 'Премиум', id: 'prem' },
]
const ModelCar = ({ car, activeModel, setModel, index }) => {
	const modelClass = activeModel
		? style.car_active
		: ''
	return (
        <div className={style.car + ' ' + modelClass} onClick={() => setModel(index)}>
            <h3>{car.name}</h3>
            <p>{car.priceMin} - {car.priceMax} ₽</p>
            <img src={car.thumbnail} alt="car" />
        </div>
        
	)
}


let Model = () => {
    const [nextPage, setNextPage] = useState(false)
	const [activeModel, setActiveModel] = useState(null)
    const [price, setActivePrice] = useState(null)
    const [selectType, setSelectType] = useState('Все модели')

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelectType(value);
    };

	const unclokedIndexes = nextPage ? [0, 2] : [0]
	let buttonClass, link;
    if(nextPage){
        buttonClass = btn.orderBtn
        link = "/orderPages/add"
    } else {
        buttonClass = btn.orderBtn + ' ' + btn.orderBtn_disable
    }

    return(
        <>
        <Navigation activeIndex={1}
					unlockedIndexes={unclokedIndexes}
         />
        <div className={style.main_order}>
            <div className={style.model_container}>
                <div className={style.radio}>
                    {modelTypes.map((type) => (
                        <RadioInput id={type.id} key={type.id} value={type.name} select={selectType} func={event => handleSelectChange(event)} />
                    ))}
                </div>
                <div className={style.cars}>
                    {cars.map((car, i) => (
                        <ModelCar
                            key={i++}
                            car={car}
                            activeModel={activeModel === car.name}
                            setModel={(name) => {
                                setActiveModel(name)
                                setActivePrice({
                                    priceMin: car.priceMin,
                                    priceMax: car.priceMax
                                })
                                setNextPage(true)
                            }}
                            index={car.name}
                        />
                    ))}
                </div>
            </div>
            <YourOrder activeModel={activeModel} price={price} textBtn='Дополнительно' buttonClass={buttonClass} link={link} />
        </div>
        </>
    )
}


export default Model