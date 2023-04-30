import React, { ComponentType } from 'react'
import { DialogType, MessageType } from '../../App'
import { addMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import store, { AppStateType } from '../../redux/redux-store'
import { compose, Dispatch } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

type DialogsContainerPropsType = {
	dialogsData: Array<DialogType>
	messagesData: Array<MessageType>
	newMessageText: string
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

export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
