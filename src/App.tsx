import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

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
		profilePages: {
			postsData: Array<PostType>
			newPostText: string
		}
		dialogsPages: {
			dialogsData: Array<DialogType>
			messagesData: Array<MessageType>
			newMessageText: string
		}
		sidebar: {
			friends: Array<FriendType>
		}
	}
	dispatch: any
}

function App(props: AppPropsType) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar friends={props.state.sidebar.friends} />
				<Route
					path={'/profile'}
					render={() => (
						<Profile
							postsData={props.state.profilePages.postsData}
							dispatch={props.dispatch}
							newPostText={props.state.profilePages.newPostText}
						/>
					)}
				/>
				<Route
					path={'/dialogs'}
					render={() => (
						<Dialogs
							dialogsData={props.state.dialogsPages.dialogsData}
							messagesData={props.state.dialogsPages.messagesData}
							dispatch={props.dispatch}
							newMessageText={props.state.dialogsPages.newMessageText}
						/>
					)}
				/>
				<Route path={'/news'} component={News} />
				<Route path={'/music'} component={Music} />
				<Route path={'/settings'} component={Settings} />
			</div>
		</BrowserRouter>
	)
}

export default App
