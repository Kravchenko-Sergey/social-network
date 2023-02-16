import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { DialogType, MessageType, PostType } from '../../App'

type DialogsPropsType = {
	dialogsData: Array<DialogType>
	messagesData: Array<MessageType>
}

function Dialogs(props: DialogsPropsType) {
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
					<textarea className={classes.textarea}></textarea>
					<button className={classes.button}>send message</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
