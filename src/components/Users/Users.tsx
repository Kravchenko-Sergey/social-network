import React from 'react'
import classes from './Users.module.css'
import { UserType } from '../../App'
import { NavLink } from 'react-router-dom'

type UsersPropsType = {
	totalUserCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (page: number) => void
	usersPage: {
		users: UserType[]
	}
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
	const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
	const pages = []
	for (let i = 1; i <= 10; i++) {
		pages.push(i)
	}
	return (
		<div className={classes.container}>
			<div className={classes.pagination}>
				{pages.map(page => (
					<span
						key={page}
						onClick={event => {
							props.onPageChanged(page)
						}}
						className={
							props.currentPage === page ? classes.selected : classes.default
						}
					>
						{page}
					</span>
				))}
			</div>
			<div className={classes.users}>
				{props.usersPage.users.map((user: UserType) => (
					<div key={user.id} className={classes.user}>
						<div className={classes.avaButton}>
							<NavLink to={'/profile' + user.id}>
								<img
									src={
										user.photos.large !== null
											? user.photos.large
											: `https://avatars.dicebear.com/api/avataaars/${(
													Math.random() + 1
											  )
													.toString(36)
													.substring(7)}.svg`
									}
									alt={'avatar'}
								/>
							</NavLink>
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
								<div className={classes.userName}>{user.name}</div>
								<div className={classes.userStatus}>{user.status}</div>
							</div>
							<div className={classes.location}>
								<div className={classes.city}>{'user.location.city'}</div>
								<div className={classes.country}>{'user.location.country'}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Users
