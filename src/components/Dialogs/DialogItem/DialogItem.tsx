import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'
import React from 'react'

type DialogItemPropsType = {
	id: number
	name: string
}

const DialogItem = (props: DialogItemPropsType) => {
	return (
		<div className={classes.dialog}>
			<img
				className={classes.avatar}
				src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
					.toString(36)
					.substring(7)}.svg`}
				alt={'avatar'}
			/>
			<div className={`${classes.text} ${classes.active}`}>
				<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
			</div>
		</div>
	)
}

export default DialogItem
