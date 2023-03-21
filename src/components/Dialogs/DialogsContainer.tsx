import React from 'react'
import { DialogType, MessageType, UserType } from '../../App'
import {
	addMessageAC,
	updateNewMessageTextAC
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import store, { AppStateType } from '../../redux/redux-store'
import { Dispatch } from 'redux'
import { InitialStateType } from '../../redux/users-reducer'

type DialogsContainerPropsType = {
	dialogsData: Array<DialogType>
	messagesData: Array<MessageType>
	newMessageText: string
	dispatch: any
}

type MapStatePropsType = {
	dialogsData: Array<DialogType>
	messagesData: Array<MessageType>
	newMessageText: string
}

type MapDispatchToPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		dialogsData: store.getState().dialogsReducer.dialogsData,
		messagesData: store.getState().dialogsReducer.messagesData,
		newMessageText: store.getState().dialogsReducer.newMessageText
	}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		updateNewMessageText: (text: string) => {
			dispatch(updateNewMessageTextAC(text))
		},
		addMessage: () => {
			dispatch(addMessageAC())
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
