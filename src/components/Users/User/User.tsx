import React from 'react'
import classes from '../Users.module.css'
import { NavLink } from 'react-router-dom'

type UserPropsType = {
	id: number
	photos: { large: string }
	followingInProgress: any
	unfollow: (userId: number) => void
	follow: (userId: number) => void
	name: string
	status: string
	followed: boolean
}

const User = (props: UserPropsType) => {
	return (
		<div className={classes.user}>
			<div className={classes.avaButton}>
				<NavLink to={'/profile' + props.id}>
					<img
						src={
							props.photos.large !== null
								? props.photos.large
								: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1).toString(36).substring(7)}.svg`
						}
						alt={'avatar'}
					/>
				</NavLink>
				<div>
					{props.followed ? (
						<button
							disabled={props.followingInProgress.some((id: number) => id === props.id)}
							className={classes.buttonUnfollow}
							onClick={() => {
								props.unfollow(props.id)
							}}
						>
							unfollow
						</button>
					) : (
						<button
							disabled={props.followingInProgress.some((id: number) => id === props.id)}
							className={classes.buttonFollow}
							onClick={() => {
								props.follow(props.id)
							}}
						>
							follow
						</button>
					)}
				</div>
			</div>
			<div className={classes.userInform}>
				<div className={classes.nameAndStatus}>
					<div className={classes.userName}>{props.name}</div>
					<div className={classes.userStatus}>{props.status}</div>
				</div>
				<div className={classes.location}>
					<div className={classes.city}>{'user.location.city'}</div>
					<div className={classes.country}>{'user.location.country'}</div>
				</div>
			</div>
		</div>
	)
}

export default User
