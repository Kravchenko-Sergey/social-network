import React from 'react'
import classes from './Users.module.css'
import { UserType } from '../../App'
import User from './User/User'

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
	followingInProgress: any
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
						onClick={() => {
							props.onPageChanged(page)
						}}
						className={props.currentPage === page ? classes.selected : classes.default}
					>
						{page}
					</span>
				))}
			</div>
			<div className={classes.users}>
				{props.usersPage.users.map((user: UserType) => (
					<User
						key={user.id}
						id={user.id}
						photos={user.photos}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
						name={user.name}
						status={user.status}
						followed={user.followed}
					/>
				))}
			</div>
		</div>
	)
}

export default Users
