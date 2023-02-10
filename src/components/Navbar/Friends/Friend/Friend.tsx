import React from 'react'
import classes from './Friend.module.css'

type FriendPropsType = {
	id: number
	name: string
}

function Friend(props: FriendPropsType) {
	console.log(props)
	return (
		<div className={classes.container}>
			<div className={classes.avatar}>
				<img
					src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
						.toString(36)
						.substring(7)}.svg`}
					alt={'avatar'}
				/>
			</div>
			<div className={classes.name}>{props.name}</div>
		</div>
	)
}

export default Friend
