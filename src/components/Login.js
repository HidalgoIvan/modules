import React, { Component } from 'react';
import LoginInputs from './LoginInputs';
class Login extends Component{
	render(){
		return (
				<div class="formulario">
					<h1 class="mdc-typography--headline6">Login</h1>
					<LoginInputs></LoginInputs>
				</div>
			);
	}
}
export default Login;