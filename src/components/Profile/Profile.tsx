import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'

type ProfilePropsType = {
	profile: any
}

function Profile(props: ProfilePropsType) {
	return (
		<div className={classes.content}>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile
