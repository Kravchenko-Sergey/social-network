import React from 'react'
import MyPosts from './MyPosts'
import { PostType } from '../../../App'
import { addPostAC } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import store, { AppStateType } from '../../../redux/redux-store'
import { Dispatch } from 'redux'

type MapStatePropsType = {
	postsData: PostType[]
}

type MapDispatchToPropsType = {
	addPost: (values: any) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		postsData: store.getState().profileReducer.postsData
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addPost: (newPostText: string) => {
			dispatch(addPostAC(newPostText))
		}
	}
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
