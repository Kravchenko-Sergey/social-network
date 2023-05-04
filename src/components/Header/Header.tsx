import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

type HeaderPropsType = any

function Header(props: HeaderPropsType) {
	return (
		<header className={classes.header}>
			<div className={classes.logoBlock}>
				<img
					className={classes.logo}
					src='https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-441.png'
					alt='logo'
				/>
				<div>
					<h1 className={classes.name}>Соцсеть - и точка</h1>
				</div>
			</div>
			<div className={classes.loginBlock}>
				{props.isAuth ? (
					<div>
						{props.login} - <button onClick={props.logout}>Log out</button>
					</div>
				) : (
					<NavLink to={'./login'}>Login</NavLink>
				)}
			</div>
		</header>
	)
}

export default Header
