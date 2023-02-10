import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { PostType } from '../../App'

type ProfilePropsType = {
	postsData: Array<PostType>
}

function Profile(props: ProfilePropsType) {
	return (
		<div className={classes.content}>
			<ProfileInfo />
			<MyPosts postsData={props.postsData} />
		</div>
	)
}

export default Profile
