import React from 'react'
import style from './Slider.module.scss'

const Slide = ({ content }) => {
	const slideStyles = {
		backgroundImage: `url(${content.image})`
	}
	console.log(content.buttonClass)
	return (
		<div className={style.item} style={slideStyles}>
			<h3 className={style.title}>{content.title}</h3>
			<p className={style.text}>{content.text}</p>
			<button className={content.buttonClass}>Подробнее</button>
		</div>
	)
}

export default Slide
