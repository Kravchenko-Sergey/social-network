import React from 'react'
import { connect } from 'react-redux'
import {
	followAC,
	InitialStateType,
	setUsersAC,
	unFollowAC
} from '../../redux/users-reducer'
import { AppStateType } from '../../redux/redux-store'
import Users from './Users'
import { UserType } from '../../App'
import { Dispatch } from 'redux'

type MapStatePropsType = {
	usersPage: InitialStateType
}

type MapDispatchToPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		usersPage: state.usersPage
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		follow: (userId: any) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId: any) => {
			dispatch(unFollowAC(userId))
		},
		setUsers: (users: UserType[]) => {
			dispatch(setUsersAC(users))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
