import React from 'react'
import classes from './Post.module.css'

type PostPropsType = {
	message: string
	likesCount: number
}

function Post(props: PostPropsType) {
	return (
		<div className={classes.item}>
			<img
				className={classes.avatar}
				src='https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg'
				alt={'avatar'}
			/>
			<div className={classes.message}>{props.message}</div>
			<div className={classes.likes}>{props.likesCount} likes</div>
		</div>
	)
}

export default Post
