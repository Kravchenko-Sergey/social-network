export type DialogType = {
	id: number
	name: string
}
export type MessageType = {
	id: number
	message: string
}

const ADD_MESSAGE = 'ADD-MESSAGE'

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
	] as MessageType[]
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: UnionType): InitialStateType => {
	switch (action.type) {
		case ADD_MESSAGE: {
			const body = action.newMessageBody

			return {
				...state,
				messagesData: [...state.messagesData, { id: 6, message: body }]
			}
		}
		default:
			return state
	}
}

type UnionType = AddMessageACType

type AddMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = (newMessageBody: any) => {
	return {
		type: ADD_MESSAGE,
		newMessageBody: newMessageBody
	} as const
}
