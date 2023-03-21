import { PostType } from '../App'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type InitialStateProfileReducerType = {
	postsData: PostType[]
	newPostText: string
}

const initialState = {
	postsData: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
		{ id: 2, message: "It's my first post", likesCount: 10 },
		{ id: 3, message: 'Yo', likesCount: 15 }
	],
	newPostText: ''
}

const profileReducer = (
	state: InitialStateProfileReducerType = initialState,
	action: UnionType
): InitialStateProfileReducerType => {
	switch (action.type) {
		case 'ADD-POST': {
			const newPost = {
				id: Number(new Date()),
				message: state.newPostText,
				likesCount: 0
			}
			let stateCopy = { ...state }
			stateCopy.postsData = [...state.postsData]
			stateCopy.postsData.push(newPost)
			stateCopy.newPostText = ''
			return stateCopy
		}
		case 'UPDATE-NEW-POST-TEXT': {
			let stateCopy = { ...state }
			stateCopy.newPostText = action.newText
			return stateCopy
		}

		default:
			return state
	}
}

type UnionType = AddPostACType | UpdateNewPostTextACType

type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
	return {
		type: ADD_POST
	} as const
}

type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	} as const
}

export default profileReducer
