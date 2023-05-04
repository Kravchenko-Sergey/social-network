import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validator'

const LoginForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field type='text' validate={[required]} placeholder={'login'} name={'login'} component={Input} />
			</div>
			<div>
				<Field type='password' validate={[required]} placeholder={'password'} name={'password'} component={Input} />
			</div>
			<div>
				<Field type='checkbox' name={'rememberMe'} component={Input} /> remember me
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
			<LoginReduxForm
				onSubmit={() => {
					console.log('qwerty')
				}}
			/>
		</div>
	)
}

export default Login
