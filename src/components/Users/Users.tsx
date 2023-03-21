import React from 'react'
import classes from './Users.module.css'
import { UsersPropsType } from './UsersContainer'

const Users = (props: UsersPropsType) => {
	if (props.usersPage.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl: '#',
				followed: true,
				fullName: 'Maksim',
				status: 'I am a boss',
				location: { city: 'Moscow', country: 'Russia' }
			},
			{
				id: 2,
				photoUrl: '#',
				followed: false,
				fullName: 'Dasha',
				status: 'I am a boss too',
				location: { city: 'Minsk', country: 'Belarus' }
			},
			{
				id: 3,
				photoUrl: '#',
				followed: true,
				fullName: 'Sasha',
				status: 'I am a boss too',
				location: { city: 'Paris', country: 'France' }
			},
			{
				id: 4,
				photoUrl: '#',
				followed: true,
				fullName: 'Mama',
				status: 'I am a boss too',
				location: { city: 'London', country: 'England' }
			},
			{
				id: 5,
				photoUrl: '#',
				followed: false,
				fullName: 'Papa',
				status: 'I am a boss too',
				location: { city: 'Madrid', country: 'Spain' }
			}
		])
	}
	return (
		<div className={classes.container}>
			{props.usersPage.users.map(user => (
				<div key={user.id} className={classes.user}>
					<div className={classes.avaButton}>
						<div>
							<img
								src={`https://avatars.dicebear.com/api/avataaars/${(
									Math.random() + 1
								)
									.toString(36)
									.substring(7)}.svg`}
								alt='avatar'
							/>
						</div>
						<div>
							{user.followed ? (
								<button
									className={classes.buttonUnfollow}
									onClick={() => props.unfollow(user.id)}
								>
									unfollow
								</button>
							) : (
								<button
									className={classes.buttonFollow}
									onClick={() => props.follow(user.id)}
								>
									follow
								</button>
							)}
						</div>
					</div>
					<div className={classes.userInform}>
						<div className={classes.nameAndStatus}>
							<div className={classes.userName}>{user.fullName}</div>
							<div className={classes.userStatus}>{user.status}</div>
						</div>
						<div className={classes.location}>
							<div className={classes.city}>{user.location.city}</div>
							<div className={classes.country}>{user.location.country}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Users
