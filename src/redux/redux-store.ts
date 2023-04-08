import { legacy_createStore as createStore } from 'redux'
import { combineReducers } from 'redux'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'

const rootReducer = combineReducers({
	profileReducer: profileReducer,
	dialogsReducer: dialogsReducer,
	sidebarReducer: sidebarReducer,
	usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store
