import React from 'react'
import style from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'
import arrow from '../../../assets/img/arr_nav_order.svg'

let Link = ({ active, unlocked, text, address, index }) => {
	let linkClass;
	if (unlocked && !active) {
		linkClass = style.unlocked
	} else if (active) {
		linkClass = style.active_link
	}
	if (index !== 0) {
		return (
			<>
				<img src={arrow} alt="arrow" />
				<div className={style.item + ' ' + linkClass}>
					<NavLink to={address}  >
						{text}
					</NavLink>
				</div>
			</>
		)
	}
	return (
		<div className={style.item + ' ' + linkClass}>
			<NavLink to={address} >
				{text}
			</NavLink>
		</div>

	)
}

let Navigation = ({ activeIndex, unlockedIndexes }) => {

	const links = [
		{ link: 'Местоположение', address: '/orderPages/location' },
		{ link: 'Модель', address: '/orderPages/model' },
		{ link: 'Дополнительно', address: '/orderPages/add' },
		{ link: 'Итого', address: '/orderPages/finalOrder' },
	]
	const checkUnlockedIndexes = (unlockedIndexes, i) => {
		let result = false
		unlockedIndexes.forEach((element) => {
			if (element === i) {
				result = true
			}
		})
		return result
	}
	
	return (
		<nav className={style.navigation}>
			<div className={style.list}>
				{links.map((link, i) => (
					<Link
						key={link.link}
						active={activeIndex === i}
						unlocked={checkUnlockedIndexes(unlockedIndexes, i)}
						text={link.link}
						address={link.address}
						index={i}
					/>
				))}
			</div>
		</nav>
	)
}
export default Navigation
