import React from 'react'
import classes from './Post.module.css'

type PostPropsType = {
	id: number
	message: string
	likesCount: number
}

function Post(props: PostPropsType) {
	return (
		<div className={classes.item}>
			<img
				className={classes.avatar}
				src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
					.toString(36)
					.substring(7)}.svg`}
				alt={'avatar'}
			/>
			<div className={classes.message}>{props.message}</div>
			<div className={classes.likes}>{props.likesCount} likes</div>
		</div>
	)
}

export default Post
