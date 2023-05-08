import { authAPI } from '../api/api'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './redux-store'
import { stopSubmit } from 'redux-form'
import { Dispatch } from 'redux'

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
				...action.payload.data
			}
		}
		default:
			return state
	}
}

type ActionsType = SetUserDataACType
type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, email: string, login: string, isAuth: boolean) => {
	return {
		type: SET_USER_DATA,
		payload: { data: { userId, email, login, isAuth } }
	} as const
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const getAuthUserData = (): any => (dispatch: Dispatch) => {
	return authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			const { id, email, login, isAuth } = response.data.data
			dispatch(setAuthUserDataAC(id, email, login, true))
		}
	})
}

export const login =
	(email: string, password: string, rememberMe: boolean): ThunkType =>
	dispatch => {
		return authAPI.login(email, password, rememberMe).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(getAuthUserData())
			} else {
				let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
				let action: any = stopSubmit('login', { email: message })
				dispatch(action)
			}
		})
	}

export const logout = (): ThunkType => dispatch => {
	return authAPI.logout().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserDataAC(0, '', '', false))
		}
	})
}
