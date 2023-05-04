import React, { RefObject } from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import store from '../../../redux/redux-store'
import { MyPostsPropsType } from './MyPostsContainer'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validator'
import { Textarea } from '../../common/FormsControls/FormsControls'

const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

const maxLength10 = maxLengthCreator(10)

function MyPosts(props: MyPostsPropsType) {
	const onAddPost = (values: any) => {
		props.addPost(values.newPostText)
	}

	return (
		<div>
			<div className={classes.title}>My posts</div>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={classes.posts}>
				{store.getState().profileReducer.postsData.map(post => (
					<Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} />
				))}
			</div>
		</div>
	)
}

export default MyPosts

const AddNewPostForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit} className={classes.form}>
			<Field
				name={'newPostText'}
				component={Textarea}
				validate={[required, maxLength10]}
				placeholder={'Post message'}
			/>
			<button className={classes.button}>Add post</button>
		</form>
	)
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)
