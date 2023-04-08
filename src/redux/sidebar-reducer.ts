import { FriendType } from '../App'
import { Action } from 'redux'

type InitialStateType = {
	friends: FriendType[]
}

const SET_USERS = 'SET-USERS'

const initialState: InitialStateType = {
	friends: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Sveta' },
		{ id: 3, name: 'Denis' },
		{ id: 4, name: 'Alisa' },
		{ id: 5, name: 'Egor' },
		{ id: 6, name: 'Masha' }
	]
}

export const sidebarReducer = (
	state: InitialStateType = initialState,
	action: Action
): InitialStateType => {
	switch (action.type) {
		default:
			return state
	}
}
