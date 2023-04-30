import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field type='text' placeholder={'login'} name={'login'} component={'input'} />
			</div>
			<div>
				<Field type='password' placeholder={'password'} name={'password'} component={'input'} />
			</div>
			<div>
				<Field type='checkbox' name={'rememberMe'} component={'input'} /> remember me
			</div>
			<div>
				<button>login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = () => {
	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm />
		</div>
	)
}

export default Login
