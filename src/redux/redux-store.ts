import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { combineReducers } from 'redux'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { sidebarReducer } from './sidebar-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app-reducer'

const rootReducer = combineReducers({
	profileReducer: profileReducer,
	dialogsReducer: dialogsReducer,
	sidebarReducer: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export default store

// @ts-ignore
window.store = store
