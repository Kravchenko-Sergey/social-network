const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'ADD-POST':
			const newPost = {
				id: 92,
				message: state.newPostText,
				likesCount: 0
			}
			state.postsData.push(newPost)
			state.newPostText = ''
			return state
		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newText!
			return state
		default:
			return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text: string | undefined) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
}

export default profileReducer
