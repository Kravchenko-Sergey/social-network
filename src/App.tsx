import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import store from './redux/redux-store'
import { Dispatch } from 'redux'
import ProfileContainer from './components/Profile/ProfileContainer'

export type DialogsPagesType = {
	dialogsData: DialogType[]
	messagesData: MessageType[]
	mewMessageText: string
}

export type ProfilePagesType = {
	postsData: PostType[]
	newPostText: string
}

export type UsersPageType = {
	users: UserType[]
}

export type UserType = {
	id: number
	name: string
	uniqueUrlName: string

	photos: {
		large: string
		small: string
	}
	followed: boolean
	status: string
}

export type UserLocation = {
	city: string
	country: string
}

export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type DialogType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}

export type FriendType = {
	id: number
	name: string
}

export type AppPropsType = {
	state: {
		profileReducer: {
			postsData: Array<PostType>
			newPostText: string
		}
		dialogsReducer: {
			dialogsData: Array<DialogType>
			messagesData: Array<MessageType>
			newMessageText: string
		}
		sidebarReducer: {
			friends: Array<FriendType>
		}
	}
	dispatch: Dispatch
}

function App() {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar friends={store.getState().sidebarReducer.friends} />
			<Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
			<Route path={'/dialogs'} render={() => <DialogsContainer />} />
			<Route path={'/users'} render={() => <UsersContainer />} />
			<Route path={'/news'} component={News} />
			<Route path={'/music'} component={Music} />
			<Route path={'/settings'} component={Settings} />
		</div>
	)
}

export default App
