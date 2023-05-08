import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'

type HeaderContainerPropsType = {}

type MapStatePropsType = {
	isAuth: boolean
	login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
