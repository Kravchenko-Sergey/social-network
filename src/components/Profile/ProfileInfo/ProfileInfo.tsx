import React from 'react'
import classes from './ProfileInfo.module.css'

function ProfileInfo() {
	return (
		<div className={classes.container}>
			<div>
				<img
					src='https://api.dicebear.com/5.x/avataaars/svg?seed=Sam'
					alt={'avatar'}
				/>
			</div>
			<div>
				<p>Hello! My name is Sergey. I love JavaScript!</p>
			</div>
		</div>
	)
}

export default ProfileInfo
