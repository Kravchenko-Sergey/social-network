import React from 'react'
import { connect } from 'react-redux'
import {
	follow,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching
} from '../../redux/users-reducer'
import { AppStateType } from '../../redux/redux-store'
import { UserType } from '../../App'
import axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

type MapStatePropsType = {
	usersPage: {
		users: UserType[]
	}
	pageSize: number
	totalUserCount: number
	currentPage: number
	isFetching: boolean
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
	setUsers: (users: UserType[]) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	totalUserCount: number
	pageSize: number
	currentPage: number
	setCurrentPage: (page: number) => void
	setTotalUsersCount: (totalCount: number) => void
	toggleIsFetching: (isFetching: boolean) => void
	isFetching: boolean
}

type IRecipeState = {}

class UsersAPIComponent extends React.Component<IRecipeProps, IRecipeState> {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}
	onPageChanged = (page: number) => {
		this.props.setCurrentPage(page)
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
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
					/>
				)}
			</>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		usersPage: state.usersPage,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
})(UsersAPIComponent)
