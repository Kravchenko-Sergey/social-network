import React, { RefObject } from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import store from '../../redux/redux-store'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validator'

type DialogsType = {
	updateNewMessageText: (text: string) => void
	addMessage: (values: any) => void
	messagesData: MessageType[]
	dialogsData: DialogType[]
	newMessageText: string
	isAuth: boolean
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

	const addNewMessage = (values: any) => {
		props.addMessage(values.newMessageBody)
	}

	if (props.isAuth) {
		return <Redirect to={'/login'} />
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
						className={message.id % 2 === 0 ? classes.myMessage : classes.message}
					/>
				))}
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	)
}

const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Textarea}
					validate={[required, maxLength50]}
					name={'newMessageBody'}
					placeholder={'Enter new message'}
				/>
				<button className={classes.button}>send message</button>
			</div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs
