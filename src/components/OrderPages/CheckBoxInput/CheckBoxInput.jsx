import React from 'react'
import style from './ChexBoxInput.module.scss'

const ChexBoxInput = (props) => {
	return (
		<>
			<input
				type="checkbox"
				className={style.custom_checkbox}
				id={props.name}
				name={props.name}
				value={props.name}
				checked={props.checked}
                onChange={props.onChange}
			/>
			<label htmlFor={props.name}>
				{props.name}
			</label>
		</>
	)
}

export default ChexBoxInput
