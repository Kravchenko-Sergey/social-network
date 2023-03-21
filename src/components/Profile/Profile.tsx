import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType } from '../../App'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'

type ProfilePropsType = {
	postsData: Array<PostType>
	newPostText: string
	dispatch: any
}

function Profile() {
	return (
		<div className={classes.content}>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	)
}

export default Profile
