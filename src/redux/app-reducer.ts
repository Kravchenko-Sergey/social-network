import { Dispatch } from 'redux'
import { getAuthUserData } from './auth-reducer'

const SET_INITIALIZED_SUCCESS = 'SET-INITIALIZED_SUCCESS'

type InitialStateType = {
	initialized: boolean
}

const initialState = {
	initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case SET_INITIALIZED_SUCCESS:
			return { ...state, initialized: true }
		default:
			return state
	}
}

type ActionsType = InitializedSuccessType

type InitializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
	return {
		type: SET_INITIALIZED_SUCCESS
	}
}

export const initializedApp = () => (dispatch: Dispatch) => {
	const promise = dispatch(getAuthUserData())
	promise.then(() => {
		dispatch(initializedSuccess())
	})
}
