import React, { useState, useEffect, useRef } from 'react'
import style from './Slider.module.scss'
import SliderContent from './SliderContent'
import Dots from './Dots'

import  ArrowLeft  from '../../assets/img/prev.svg'
import  ArrowRight  from '../../assets/img/next.svg'

import image1 from '../../assets/img/slide1.jpg'
import image2 from '../../assets/img/slide2.jpg'
import image3 from '../../assets/img/slide3.jpg'
import image4 from '../../assets/img/slide4.jpg'

const Slider = () => {
	const content = [
		{
			image: image1,
			title: 'Бесплатная парковка',
			text:
				'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
			buttonClass: style.btn + ' ' + style.btn_first
		},
		{
			image: image2,
			title: 'Страховка',
			text: 'Полная страховка страховка автомобиля',
			buttonClass: style.btn + ' ' + style.btn_second
		},
		{
			image: image3,
			title: 'Бензин',
			text: 'Полный бак на любой заправке города за наш счёт',
			buttonClass: style.btn + ' ' + style.btn_third
		},
		{
			image: image4,
			title: 'Обслуживание',
			text: 'Автомобиль проходит еженедельное ТО',
			buttonClass: style.btn + ' ' + style.btn_fourth
		},
	]

	const myRef = useRef(null)

	const [myComponentWidth, setMyComponentWidth] = useState('')
	const [state, setState] = useState({
		activeIndex: 0,
		translate: 0,
		transition: 0.45,
	})
	useEffect(() => {
		const handleResize = () => {
			setMyComponentWidth(myRef.current.offsetWidth)
			setState({
				activeIndex: 0,
				translate: 0,
			})
		}
		handleResize()
		if (myRef.current) window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [myRef])

	const { translate, transition, activeIndex } = state

	const nextSlide = () => {
		if (activeIndex === content.length - 1) {
			return setState({
				...state,
				translate: 0,
				activeIndex: 0,
			})
		}

		setState({
			...state,
			activeIndex: activeIndex + 1,
			translate: (activeIndex + 1) * myComponentWidth,
		})
	}

	const prevSlide = () => {
		if (activeIndex === 0) {
			return setState({
				...state,
				translate: (content.length - 1) * myComponentWidth,
				activeIndex: content.length - 1,
			})
		}

		setState({
			...state,
			activeIndex: activeIndex - 1,
			translate: (activeIndex - 1) * myComponentWidth,
		})
	}
	const changeSlide = (i) => {
		return setState({
			...state,
			activeIndex: i,
			translate: i * myComponentWidth,
		})
	}

	return (
		<div className={style.slider} ref={myRef}>
			<button
				onClick={() => prevSlide()}
				className={style.arrow + ' ' + style.arrow_prev}
			>
				<img src={ArrowLeft} alt="previos" />
			</button>
			<button
				onClick={() => nextSlide()}
				className={style.arrow + ' ' + style.arrow_next}
			>
				<img src={ArrowRight} alt="next" />
			</button>
			<SliderContent
				translate={translate}
				transition={transition}
				width={myComponentWidth}
				content={content}
			></SliderContent>
			<Dots
				slides={content}
				activeIndex={activeIndex}
				changeSlide={(i) => changeSlide(i)}
			/>
		</div>
	)
}
export default Slider
