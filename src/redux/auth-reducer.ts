import { authAPI } from '../api/api'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './redux-store'

const SET_USER_DATA = 'SET-USER-DATA'

type InitialStateType = {
	userId: null | number
	email: null | string
	login: null | string
	isAuth: boolean
}

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
	//isFetching: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload.data,
				isAuth: true
			}
		}
		default:
			return state
	}
}

type ActionsType = SetUserDataACType
type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
	return {
		type: SET_USER_DATA,
		payload: { data: { userId, email, login } }
	} as const
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const getAuthUserData = (): ThunkType => dispatch => {
	return authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			const { id, email, login } = response.data.data
			dispatch(setAuthUserDataAC(id, email, login))
		}
	})
}
