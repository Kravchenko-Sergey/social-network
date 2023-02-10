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

type AppPropsType = {
	postsData: Array<PostType>
	dialogsData: Array<DialogType>
	messagesData: Array<MessageType>
}

function App(props: AppPropsType) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<Route
					path={'/profile'}
					render={() => <Profile postsData={props.postsData} />}
				/>
				<Route
					path={'/dialogs'}
					render={() => (
						<Dialogs
							dialogsData={props.dialogsData}
							messagesData={props.messagesData}
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
