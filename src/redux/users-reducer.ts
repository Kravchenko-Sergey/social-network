import { UserType } from '../App'
import { usersAPI } from '../api/api'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './redux-store'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export type InitialStateType = {
	users: UserType[]
	pageSize: number
	totalUserCount: number
	currentPage: number
	isFetching: boolean
	followingInProgress: number[]
}

const initialState: InitialStateType = {
	users: [],
	pageSize: 5,
	totalUserCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [1, 2, 3]
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(user => (user.id === Number(action.payload.userId) ? { ...user, followed: true } : user))
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(user =>
					user.id === Number(action.payload.userId) ? { ...user, followed: false } : user
				)
			}
		}
		case SET_USERS: {
			return { ...state, users: action.payload.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.payload.currentPage }
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUserCount: action.payload.totalCount }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: !action.payload.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.payload.isFetching
					? [...state.followingInProgress, action.payload.userId]
					: state.followingInProgress.filter((id: number) => id !== action.payload.userId)
			}
		}
		default:
			return state
	}
}

type ActionsType =
	| FollowACType
	| UnFollowACType
	| SetUsersACType
	| SetCurrentPageType
	| SetTotalUsersCountType
	| ToggleIsFetchingType
	| ToggleIsFollowingProgressType

type FollowACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
	return { type: FOLLOW, payload: { userId } } as const
}

type UnFollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
	return { type: UNFOLLOW, payload: { userId } } as const
}

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
	return { type: SET_USERS, payload: { users } } as const
}

type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
	return {
		type: SET_CURRENT_PAGE,
		payload: { currentPage }
	} as const
}
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		payload: { totalCount }
	} as const
}

type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
	return {
		type: TOGGLE_IS_FETCHING,
		payload: { isFetching }
	} as const
}

type ToggleIsFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
	return {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		payload: { isFetching, userId }
	} as const
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>
export const requestUsers = (page: number, pageSize: number): ThunkType => {
	return dispatch => {
		dispatch(toggleIsFetching(true))
		dispatch(setCurrentPage(page))
		usersAPI.getUsers(page, pageSize).then(response => {
			dispatch(setCurrentPage(page))
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(response.items))
			dispatch(setTotalUsersCount(response.totalCount))
		})
	}
}

export const follow = (userId: number): ThunkType => {
	return dispatch => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.follow(userId).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(followSuccess(userId))
			}
			dispatch(toggleFollowingProgress(false, userId))
		})
	}
}

export const unfollow = (userId: number): ThunkType => {
	return dispatch => {
		dispatch(toggleFollowingProgress(true, userId))
		usersAPI.unfollow(userId).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(unfollowSuccess(userId))
			}
			dispatch(toggleFollowingProgress(false, userId))
		})
	}
}
