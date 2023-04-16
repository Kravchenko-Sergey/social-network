import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, ProfileType } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/redux-store'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'

type PathParamsType = {
	userId: string
}

type MapStatePropsType = {
	isAuth: boolean
	profile: ProfileType | null
}

type MapDispatchPropsType = {
	getUserProfile: (userId: number) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = '2'
		}
		this.props.getUserProfile(Number(userId))
	}
	render() {
		if (!this.props.isAuth) {
			return <Redirect to={'/login'} />
		}
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	profile: state.profileReducer.profile,
	isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)
