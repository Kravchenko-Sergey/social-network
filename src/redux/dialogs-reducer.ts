export type DialogType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
	dialogsData: [
		{ id: 1, name: 'Maksim' },
		{ id: 2, name: 'Dasha' },
		{ id: 3, name: 'Sasha' },
		{ id: 4, name: 'Mama' },
		{ id: 5, name: 'Papa' }
	] as DialogType[],
	messagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Hi, how are you?' },
		{ id: 3, message: 'How is your it-incubator?' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
		{ id: 6, message: 'Yo' },
		{ id: 7, message: 'Yo' }
	] as MessageType[],
	newMessageText: ''
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (
	state: InitialStateType = initialState,
	action: UnionType
): InitialStateType => {
	switch (action.type) {
		case ADD_MESSAGE: {
			const newMessage = {
				id: Number(new Date()),
				message: state.newMessageText
			}
			return {
				...state,
				newMessageText: '',
				messagesData: [...state.messagesData, newMessage]
			}
		}
		case UPDATE_NEW_MESSAGE_TEXT: {
			return { ...state, newMessageText: action.newText }
		}
		default:
			return state
	}
}

type UnionType = AddMessageACType | UpdateNewMessageTextACType

type AddMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
	return {
		type: ADD_MESSAGE
	} as const
}

type UpdateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (text: string) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text
	} as const
}
