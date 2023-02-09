import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
	const messagesData = [
		{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
		{ id: 2, message: "It's my first post", likesCount: 10 },
		{ id: 3, message: 'Yo', likesCount: 15 }
	]
	return (
		<div>
			<div className={classes.title}>My posts</div>
			<div className={classes.form}>
				<textarea className={classes.textarea}></textarea>
				<button className={classes.button}>Add post</button>
			</div>
			<div className={classes.posts}>
				{messagesData.map(post => (
					<Post
						key={post.id}
						id={post.id}
						message={post.message}
						likesCount={post.likesCount}
					/>
				))}
			</div>
		</div>
	)
}

export default MyPosts
