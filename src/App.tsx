import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, withRouter } from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import store from './redux/redux-store'
import { compose, Dispatch } from 'redux'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initializedApp, initializedSuccess } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'

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
	photos: { large: string; small: string }
	followed: boolean
	status: string
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

type AppContainerPropsType = {
	initializedApp: () => void
	initialized: any
}

class App extends React.Component<AppContainerPropsType> {
	componentDidMount() {
		this.props.initializedApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		} else {
			return (
				<div className='app-wrapper'>
					<HeaderContainer />
					<Navbar friends={store.getState().sidebarReducer.friends} />
					<Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
					<Route path={'/dialogs'} render={() => <DialogsContainer />} />
					<Route path={'/users'} render={() => <UsersContainer />} />
					<Route path={'/login'} render={() => <Login />} />
					<Route path={'/news'} component={News} />
					<Route path={'/music'} component={Music} />
					<Route path={'/settings'} component={Settings} />
				</div>
			)
		}
	}
}

const mapStateToProps = (state: any) => ({ initialized: state.app.initialized })

export default compose(withRouter, connect(mapStateToProps, { initializedApp }))(App)
