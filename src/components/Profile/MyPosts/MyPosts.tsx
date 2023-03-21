import React, { LegacyRef, RefObject } from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { PostType } from '../../../App'
import store from '../../../redux/redux-store'
import { MyPostsPropsType } from './MyPostsContainer'

/*type MyPostsPropsType = {
	updateNewPostText: (text: string) => void
	addPost: () => void
	postsData: PostType[]
	newPostText: string
}*/

const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

function MyPosts(props: MyPostsPropsType) {
	const onAddPost = () => {
		props.addPost()
	}
	const onPostChange = () => {
		const text: any = newPostElement.current?.value
		props.updateNewPostText(text)
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
				<button onClick={onAddPost} className={classes.button}>
					Add post
				</button>
			</div>
			<div className={classes.posts}>
				{store.getState().profileReducer.postsData.map(post => (
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
