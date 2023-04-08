import { UserType } from '../App'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

type LocationType = {
	city: string
	country: string
}

export type InitialStateType = {
	users: UserType[]
	pageSize: number
	totalUserCount: number
	currentPage: number
	isFetching: boolean
}

const initialState: InitialStateType = {
	users: [],
	pageSize: 5,
	totalUserCount: 0,
	currentPage: 1,
	isFetching: false
}

export const usersReducer = (
	state: InitialStateType = initialState,
	action: UnionACType
): InitialStateType => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(user =>
					user.id === Number(action.payload.userId)
						? { ...user, followed: true }
						: user
				)
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(user =>
					user.id === Number(action.payload.userId)
						? { ...user, followed: false }
						: user
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
		default:
			return state
	}
}

type UnionACType =
	| FollowACType
	| UnFollowACType
	| SetUsersACType
	| SetCurrentPageType
	| SetTotalUsersCountType
	| ToggleIsFetchingType

type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
	return { type: FOLLOW, payload: { userId } } as const
}

type UnFollowACType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
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
