import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

const store = {
	/*_state: {
		profilePages: {
			postsData: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
				{ id: 2, message: "It's my first post", likesCount: 10 },
				{ id: 3, message: 'Yo', likesCount: 15 }
			],
			newPostText: ''
		},
		dialogsPages: {
			dialogsData: [
				{ id: 1, name: 'Maksim' },
				{ id: 2, name: 'Dasha' },
				{ id: 3, name: 'Sasha' },
				{ id: 4, name: 'Mama' },
				{ id: 5, name: 'Papa' }
			],
			messagesData: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'Hi, how are you?' },
				{ id: 3, message: 'How is your it-incubator?' },
				{ id: 4, message: 'Yo' },
				{ id: 5, message: 'Yo' },
				{ id: 6, message: 'Yo' },
				{ id: 7, message: 'Yo' }
			],
			newMessageText: ''
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Sveta' },
				{ id: 3, name: 'Denis' },
				{ id: 4, name: 'Alisa' },
				{ id: 5, name: 'Egor' },
				{ id: 6, name: 'Masha' }
			]
		}
	},
	_callSubscriber() {
		console.log('State changed')
	},
	getState() {
		return this._state
	},
	subscribe(observer: () => void) {
		store._callSubscriber = observer
	},
	dispatch(action: { type: string; newText: string }) {
		this._state.profilePages = profileReducer(this._state.profilePages, action)
		this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)
		this._callSubscriber()
	}*/
}

export default store
