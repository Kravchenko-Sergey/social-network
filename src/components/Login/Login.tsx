import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validator'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const LoginForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field type='text' validate={[required]} placeholder={'Email'} name={'email'} component={Input} />
			</div>
			<div>
				<Field type='password' validate={[required]} placeholder={'Password'} name={'password'} component={Input} />
			</div>
			<div>
				<Field type='checkbox' name={'rememberMe'} component={Input} /> remember me
			</div>
			<div></div>
			<div>
				<button>login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props: any) => {
	const onSubmit = (formData: any) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = (state: any) => ({
	isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)
