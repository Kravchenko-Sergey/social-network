import { UsersPageType } from '../App'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type LocationType = {
	city: string
	country: string
}

type UserType = {
	id: number
	photoUrl: string
	followed: boolean
	fullName: string
	status: string
	location: LocationType
}

export type InitialStateType = {
	users: UserType[]
}

const initialState: InitialStateType = {
	users: []
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
			return { ...state, users: [...state.users, ...action.payload.users] }
		}
		default:
			return state
	}
}

type UnionACType = FollowACType | UnFollowACType | SetUsersACType

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: string) => {
	return { type: FOLLOW, payload: { userId } } as const
}

type UnFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: string) => {
	return { type: UNFOLLOW, payload: { userId } } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
	return { type: SET_USERS, payload: { users } } as const
}

export default usersReducer
