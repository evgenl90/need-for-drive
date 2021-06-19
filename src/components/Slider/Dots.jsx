import React from 'react'
import style from './Slider.module.scss'

const Dot = ({ active, changeSlide }) => {
	const dotClass = active
		? style.radio + ' ' + style.radio_active
		: style.radio
	return (
		<button
			className={dotClass}
			aria-label="change slide"
			onClick={changeSlide}
		></button>
	)
}

const Dots = ({ slides, activeIndex, changeSlide }) => {
	return (
		<div className={style.radio_controls}>
			{slides.map((slide, i) => (
				<Dot
					key={slide.image}
					active={activeIndex === i}
					changeSlide={() => changeSlide(i)}
				/>
			))}
		</div>
	)
}

export default Dots
