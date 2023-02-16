import React from 'react'
import classes from './Header.module.css'

function Header() {
	return (
		<header className={classes.header}>
			<img
				className={classes.logo}
				src='https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-441.png'
				alt={'logo'}
			/>
			<div>
				<h1 className={classes.name}>Соцсеть - и точка</h1>
			</div>
		</header>
	)
}

export default Header
