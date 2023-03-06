const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			const newMessage = {
				id: 35,
				message: state.newMessageText
			}
			state.messagesData.push(newMessage)
			state.newMessageText = ''
			return state
		case 'UPDATE-NEW-MESSAGE-TEXT':
			state.newMessageText = action.newText!
			return state
		default:
			return state
	}
}

export const addMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE
	}
}
export const updateNewMessageText = (text: string | undefined) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text
	}
}

export default dialogsReducer
