import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress } from '../../redux/users-reducer'
import { AppStateType } from '../../redux/redux-store'
import { UserType } from '../../App'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUserCount,
	getUsers
} from '../../redux/users-selectors'

type MapStatePropsType = {
	users: UserType[]
	pageSize: number
	totalUserCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: any
}

type MapDispatchToPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
	setCurrentPage: (currentPage: number) => void
	setTotalUsersCount: (totalCount: number) => void
	toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

type IRecipeProps = {
	usersPage: {
		users: UserType[]
	}
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	totalUserCount: number
	pageSize: number
	currentPage: number
	setCurrentPage: (page: number) => void
	isFetching: boolean
	followingInProgress: []
	getUsers: (currentPage: number, pageSize: number) => void
}

type IRecipeState = {}

class UsersAPIComponent extends React.Component<IRecipeProps, IRecipeState> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	onPageChanged = (page: number) => {
		this.props.getUsers(page, this.props.pageSize)
	}

	render() {
		return (
			<>
				{!this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						totalUserCount={this.props.totalUserCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						onPageChanged={this.onPageChanged}
						usersPage={this.props.usersPage}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
						followingInProgress={this.props.followingInProgress}
					/>
				)}
			</>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: state.usersPage.users,
		pageSize: getPageSize(state),
		totalUserCount: getTotalUserCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default compose<ComponentType>(
	connect(mapStateToProps, {
		follow: followSuccess,
		unfollow: unfollowSuccess,
		setCurrentPage,
		toggleFollowingProgress,
		getUsers
	})
)(UsersAPIComponent)
