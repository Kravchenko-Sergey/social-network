import React, { ComponentType } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, ProfileType, updateStatus } from '../../redux/profile-reducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

type PathParamsType = {
	userId: string
}

type MapStatePropsType = {
	profile: ProfileType | null
	status: string
	updateStatus: any
	authorizedUserId: string
	isAuth: boolean
}

type MapDispatchPropsType = {
	getUserProfile: (userId: number) => void
	getStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getUserProfile(Number(userId))
		this.props.getStatus(userId)
	}
	render() {
		return (
			<Profile
				{...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus}
			/>
		)
	}
}

const mapStateToProps = (state: any): any => ({
	profile: state.profileReducer.profile,
	status: state.profileReducer.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)
