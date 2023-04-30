import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../redux/profile-reducer'

type ProfilePropsType = {
	profile: ProfileType | null
	status: any
	updateStatus: any
}

function Profile(props: ProfilePropsType) {
	return (
		<div className={classes.content}>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div>
	)
}

export default Profile
