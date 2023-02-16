import React, { LegacyRef, RefObject } from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { PostType } from '../../../App'

type MyPostsPropsType = {
	postsData: Array<PostType>
	addPost: (postMessage: string) => void
}

const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

function MyPosts(props: MyPostsPropsType) {
	const addUser = () => {
		const text = newPostElement!.current!.value
		props.addPost(text)
	}
	return (
		<div>
			<div className={classes.title}>My posts</div>
			<div className={classes.form}>
				<textarea ref={newPostElement} className={classes.textarea}></textarea>
				<button onClick={addUser} className={classes.button}>
					Add post
				</button>
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
