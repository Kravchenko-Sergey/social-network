import React, { RefObject } from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { DialogType, MessageType, PostType } from '../../App'
import {
	addMessageActionCreator,
	updateNewMessageText
} from '../../redux/dialogs-reducer'

type DialogsPropsType = {
	dialogsData: Array<DialogType>
	messagesData: Array<MessageType>
	newMessageText: string
	dispatch: any
}

const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

function Dialogs(props: DialogsPropsType) {
	const addMess = () => {
		props.dispatch(addMessageActionCreator())
	}

	const onMessageChange = () => {
		const text = newMessageElement.current?.value
		const actions = updateNewMessageText(text)
		props.dispatch(actions)
	}

	return (
		<div className={classes.container}>
			<div className={classes.dialogs}>
				{props.dialogsData.map(dialog => (
					<DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
				))}
			</div>
			<div className={classes.messages}>
				{props.messagesData.map(message => (
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
					<button onClick={addMess} className={classes.button}>
						send message
					</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
