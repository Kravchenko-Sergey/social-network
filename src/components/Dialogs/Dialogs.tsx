import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type DialogItemType = {
	id: number
	name: string
}

type MessageType = {
	id: number
	text: string
	className: string
}

const DialogItem = (props: DialogItemType) => {
	return (
		<div className={classes.dialog}>
			<img
				className={classes.avatar}
				src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
					.toString(36)
					.substring(7)}.svg`}
				alt={'avatar'}
			/>
			<div className={`${classes.text} ${classes.active}`}>
				<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
			</div>
		</div>
	)
}

const Message = (props: MessageType) => {
	return <div className={props.className}>{props.text}</div>
}

function Dialogs() {
	const dialogsData = [
		{ id: 1, name: 'Maksim' },
		{ id: 2, name: 'Dasha' },
		{ id: 3, name: 'Sasha' },
		{ id: 4, name: 'Mama' },
		{ id: 5, name: 'Papa' }
	]
	const messagesData = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Hi, how are you?' },
		{ id: 3, message: 'How is your it-incubator?' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
		{ id: 6, message: 'Yo' },
		{ id: 7, message: 'Yo' }
	]
	return (
		<div className={classes.container}>
			<div className={classes.dialogs}>
				{dialogsData.map(dialog => (
					<DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
				))}
			</div>
			<div className={classes.messages}>
				{messagesData.map(message => (
					<Message
						key={message.id}
						id={message.id}
						text={message.message}
						className={
							message.id % 2 === 0 ? classes.myMessage : classes.message
						}
					/>
				))}
			</div>
		</div>
	)
}

export default Dialogs
