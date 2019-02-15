import React, { Component } from 'react';
class LoginInputs extends Component{
	render(){
		return (
		<div class="inputs">
			<div class="row inputs">
		      <div class="mdc-text-field">
		        <input type="text" class="mdc-text-field__input" id="username-input" name="username" required></input>
		        <label class="mdc-floating-label" for="username-input">Usuario</label>
		        <div class="mdc-line-ripple"></div>
		      </div>
		    </div>
		    <div class="row inputs">
		      <div class="mdc-text-field password">
		        <input type="password" class="mdc-text-field__input" id="password-input" name="password" required minlength="8"></input>
		        <label class="mdc-floating-label" for="password-input">Contraseña</label>
		        <div class="mdc-line-ripple"></div>
		      </div>
		    </div>
		</div>
			);
	}
}
export default LoginInputs;