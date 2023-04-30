import { addPostAC, profileReducer, setUserProfile, updateNewPostTextAC } from './profile-reducer'

test('New post should be added correctly', () => {
	const startState = {
		postsData: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
			{ id: 2, message: "It's my first post", likesCount: 10 },
			{ id: 3, message: 'Yo', likesCount: 15 }
		],
		newPostText: '',
		profile: null,
		status: ''
	}

	const endState = profileReducer(startState, addPostAC())

	expect(endState.postsData.length).toBe(4)
	expect(endState.postsData[endState.postsData.length - 1].message).toBe(endState.newPostText)
	expect(endState.postsData[endState.postsData.length - 1].likesCount).toBe(0)
})

test('The text of the new post should be correctly added', () => {
	const startState = {
		postsData: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
			{ id: 2, message: "It's my first post", likesCount: 10 },
			{ id: 3, message: 'Yo', likesCount: 15 }
		],
		newPostText: '',
		profile: null,
		status: ''
	}
	const newText = 'Hello World!'

	const endState = profileReducer(startState, updateNewPostTextAC(newText))

	expect(endState.newPostText).toBe(newText)
})

test('The user profile should change correctly', () => {
	const startState = {
		postsData: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
			{ id: 2, message: "It's my first post", likesCount: 10 },
			{ id: 3, message: 'Yo', likesCount: 15 }
		],
		newPostText: '',
		profile: null,
		status: ''
	}
	const newProfile = {
		aboutMe: 'fdgdgs',
		contacts: {
			facebook: 'gdfgd',
			github: 'dfgdfgdf',
			instagram: 'dgfdfg',
			mainLink: null,
			twitter: 'dfgdfg',
			vk: 'dfgdfg',
			website: null,
			youtube: null
		},
		fullName: 'dfgdsfg',
		lookingForAJob: false,
		lookingForAJobDescription: 'sdfsdf',
		photos: {
			small: 'fdfdgf',
			large: 'dfgdfgdg'
		},
		userId: 43535
	}

	const endState = profileReducer(startState, setUserProfile(newProfile))

	expect(endState.profile).toBe(newProfile)
})
