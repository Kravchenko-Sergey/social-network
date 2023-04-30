import { PostType } from '../App'
import { profileAPI } from '../api/api'
import { ThunkAction } from 'redux-thunk'
import { AppStateType } from './redux-store'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_STATUS = 'SET-STATUS'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

type PhotosType = {
	small: string
	large: string
}

type ContactsType = {
	facebook: string
	github: string
	instagram: string
	mainLink: null
	twitter: string
	vk: string
	website: null
	youtube: null
}

export type ProfileType = {
	aboutMe: string
	contacts: ContactsType
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	photos: PhotosType
	userId: number
}

type InitialStateProfileReducerType = {
	postsData: PostType[]
	newPostText: string
	profile: ProfileType | null
	status: string
}

const initialState = {
	postsData: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 5 },
		{ id: 2, message: "It's my first post", likesCount: 10 },
		{ id: 3, message: 'Yo', likesCount: 15 }
	],
	newPostText: '',
	profile: null,
	status: ''
}

export const profileReducer = (
	state: InitialStateProfileReducerType = initialState,
	action: UnionType
): InitialStateProfileReducerType => {
	switch (action.type) {
		case ADD_POST: {
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
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state }
			stateCopy.newPostText = action.newText
			return stateCopy
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.payload.status
			}
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.payload.profile }
		}
		default:
			return state
	}
}

type UnionType = AddPostACType | UpdateNewPostTextACType | SetUserProfileACType | SetStatusACType

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

type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
	return {
		type: SET_USER_PROFILE,
		payload: {
			profile
		}
	} as const
}

type SetStatusACType = ReturnType<typeof setStatus>
export const setStatus = (status: any) => {
	return {
		type: SET_STATUS,
		payload: {
			status
		}
	} as const
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UnionType>
export const getUserProfile =
	(userId: number): ThunkType =>
	dispatch => {
		return profileAPI.getProfile(userId).then(response => {
			dispatch(setUserProfile(response.data))
		})
	}

export const getStatus =
	(userId: number): ThunkType =>
	dispatch => {
		return profileAPI.getStatus(userId).then(response => {
			dispatch(setStatus(response.data))
		})
	}

export const updateStatus =
	(status: string): ThunkType =>
	dispatch => {
		return profileAPI.updateStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status))
			}
		})
	}
