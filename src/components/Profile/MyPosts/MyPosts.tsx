import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
	return (
		<div>
			My posts
			<div className={classes.form}>
				<textarea className={classes.textarea}></textarea>
				<button className={classes.button}>Add post</button>
			</div>
			<div className={classes.posts}>
				<Post message={'Hi, how are you?'} likesCount={5} />
				<Post message={"It's my first post"} likesCount={10} />
				<Post message={'Yo'} likesCount={15} />
			</div>
		</div>
	)
}

export default MyPosts
