import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

type ProfileInfoPropsType = {
	profile: any
}

function ProfileInfo(props: ProfileInfoPropsType) {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={classes.container}>
			<div className={classes.avatar}>
				<img src={props.profile.photos.large} alt='' />
				{/*<img
					src='https://api.dicebear.com/5.x/avataaars/svg?seed=Sam'
					alt={'avatar'}
				/>*/}
			</div>
			<div>
				<p>Hello! My name is Sergey. I love JavaScript!</p>
			</div>
		</div>
	)
}

export default ProfileInfo
