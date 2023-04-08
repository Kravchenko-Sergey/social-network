import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { AppStateType } from '../../redux/redux-store'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type PathParamsType = {
	userId: string
}

type MapStatePropsType = {
	profile: any
}
type MapDispatchPropsType = {
	setUserProfile: (profile: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
	OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = '2'
		}
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setUserProfile(response.data)
			})
	}
	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	profile: state.profileReducer.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
	WithUrlDataContainerComponent
)
