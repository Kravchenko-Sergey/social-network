import React, { ChangeEvent, RefObject } from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { DialogsPagesType } from '../../App'
import store from '../../redux/redux-store'

type DialogsType = {
	updateNewMessageText: (text: string) => void
	addMessage: () => void
	messagesData: MessageType[]
	dialogsData: DialogType[]
	newMessageText: string
}

type DialogType = {
	id: number
	name: string
}

type MessageType = {
	id: number
	message: string
}

const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

function Dialogs(props: DialogsType) {
	const state = props.dialogsData

	const addMessage = () => {
		props.addMessage()
	}

	const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value
		props.updateNewMessageText(text)
	}

	return (
		<div className={classes.container}>
			<div className={classes.dialogs}>
				{store.getState().dialogsReducer.dialogsData.map(dialog => (
					<DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
				))}
			</div>
			<div className={classes.messages}>
				{store.getState().dialogsReducer.messagesData.map(message => (
					<Message
						key={message.id}
						id={message.id}
						text={message.message}
						className={
							message.id % 2 === 0 ? classes.myMessage : classes.message
						}
					/>
				))}
				<div className={classes.form}>
					<textarea
						ref={newMessageElement}
						value={props.newMessageText}
						onChange={onMessageChange}
						className={classes.textarea}
					/>
					<button onClick={addMessage} className={classes.button}>
						send message
					</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
