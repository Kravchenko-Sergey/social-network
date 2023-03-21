import React from 'react'
import MyPosts from './MyPosts'
import { PostType } from '../../../App'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import store, { AppStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

type MapStatePropsType = {
	postsData: PostType[]
	newPostText: string
}

type MapDispatchToPropsType = {
	updateNewPostText: (text: string) => void
	addPost: () => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		postsData: store.getState().profileReducer.postsData,
		newPostText: store.getState().profileReducer.newPostText
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		updateNewPostText: (text: string) => {
			dispatch(updateNewPostTextAC(text))
		},
		addPost: () => {
			dispatch(addPostAC())
		}
	}
}

export const MyPostsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MyPosts)
