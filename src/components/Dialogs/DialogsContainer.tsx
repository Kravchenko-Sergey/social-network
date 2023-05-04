import React, { ComponentType } from 'react'
import { DialogType, MessageType } from '../../App'
import { addMessageAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import store, { AppStateType } from '../../redux/redux-store'
import { compose, Dispatch } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

type DialogsContainerPropsType = {
	dialogsData: Array<DialogType>
}

type MapStatePropsType = {
	dialogsData: Array<DialogType>
}

type MapDispatchToPropsType = {}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		dialogsData: store.getState().dialogsReducer.dialogsData
	}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addMessage: (newMessageBody: any) => {
			dispatch(addMessageAC(newMessageBody))
		}
	}
}

export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
