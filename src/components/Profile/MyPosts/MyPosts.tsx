import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { PostType } from '../../../App'

type MyPostsPropsType = {
	postsData: Array<PostType>
}

function MyPosts(props: MyPostsPropsType) {
	return (
		<div>
			<div className={classes.title}>My posts</div>
			<div className={classes.form}>
				<textarea className={classes.textarea}></textarea>
				<button className={classes.button}>Add post</button>
			</div>
			<div className={classes.posts}>
				{props.postsData.map(post => (
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
