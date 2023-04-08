import {
	addMessageAC,
	dialogsReducer,
	updateNewMessageTextAC
} from './dialogs-reducer'
import { profileReducer, updateNewPostTextAC } from './profile-reducer'

test('The message should be correctly added', () => {
	const startState = {
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
	}

	const endState = dialogsReducer(startState, addMessageAC())

	expect(endState.messagesData.length).toBe(8)
	expect(endState.messagesData[endState.messagesData.length - 1].message).toBe(
		endState.newMessageText
	)
})

test('The message text should update properly', () => {
	const startState = {
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
	}
	const newMessageText = 'Hello World!'

	const endState = dialogsReducer(
		startState,
		updateNewMessageTextAC(newMessageText)
	)

	expect(endState.newMessageText).toBe(newMessageText)
})
