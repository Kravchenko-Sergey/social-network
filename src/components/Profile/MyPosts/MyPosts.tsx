import React, { LegacyRef, RefObject } from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { PostType } from '../../../App'
import { text } from 'stream/consumers'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator
} from '../../../redux/profile-reducer'

type MyPostsPropsType = {
	postsData: Array<PostType>
	newPostText: string
	dispatch: any
}

const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

function MyPosts(props: MyPostsPropsType) {
	const addUser = () => {
		props.dispatch(addPostActionCreator())
		newPostElement!.current!.value = ''
	}
	const onPostChange = () => {
		const text = newPostElement.current?.value
		const action = updateNewPostTextActionCreator(text)
		props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
	}
	return (
		<div>
			<div className={classes.title}>My posts</div>
			<div className={classes.form}>
				<textarea
					ref={newPostElement}
					value={props.newPostText}
					onChange={onPostChange}
					className={classes.textarea}
				/>
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
