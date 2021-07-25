import React from 'react'
import style from './RadioInput.module.scss'

const RadioInput = (props) => {
	return (
		<>
			<input
				type="radio"
				className={style.customRadio}
				id={props.id}
				name={props.id}
				value={props.value}
                checked={props.select === props.value}
                onChange={props.func}
			/>
			<label htmlFor={props.id}>{props.value}</label>
		</>
	)
}

export default RadioInput
