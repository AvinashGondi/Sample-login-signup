import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'

const SignUp = (props) => {

	const axios = require('axios').default;
	
	const [firstName, setFirstname] = useState('');
	const [lastName, setLastname] = useState('');
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const onInputFirstname = (event) => {
		setFirstname(event.target.value);
	}

	const onInputLastname = (event) => {
		setLastname(event.target.value);
	}

	const onInputUsername = (event) => {
		setUsername(event.target.value);
	}

	const onInputPassword = (event) => {
		setPassword(event.target.value);
	}

	const onInputRePassword = (event) => {
		setRePassword(event.target.value);
	}

	const signUpSubmitHandler = event => {
		console.log(firstName+" "+lastName+" "+userName+" "+password+" "+rePassword);
		event.preventDefault();

		if (password === rePassword){
			const body = {
				"userName":userName,
				"password":password,
				"firstName":firstName,
				"lastName":lastName
			 }
	
			axios.post('http://localhost:8080/signup',body)
			.then(function (response) {
				console.log("Success : "+response)
			})
			.catch(function (error) {
				console.log("Error while sending the request : "+error)
			})
		}
		else {
			alert("Password does not match")
			setPassword("");
			setRePassword("");
		}
	}

	function password_show_hide() {
		var x = document.getElementById("password");
		var show_eye = document.getElementById("show_eye");
		var hide_eye = document.getElementById("hide_eye");
		if (x.type === "password") {
		  x.type = "text";
		  show_eye.style.display = "none";
		  hide_eye.style.display = "block";
		} else {
		  x.type = "password";
		  show_eye.style.display = "block";
		  hide_eye.style.display = "none";
		}
	  }

	  function re_pass_password_show_hide() {
		var x = document.getElementById("rePassword");
		var show_eye = document.getElementById("re_pass_show_eye");
		var hide_eye = document.getElementById("re_pass_hide_eye");
		if (x.type === "password") {
		  x.type = "text";
		  show_eye.style.display = "none";
		  hide_eye.style.display = "block";
		} else {
		  x.type = "password";
		  show_eye.style.display = "block";
		  hide_eye.style.display = "none";
		}
	  }

    return (
        <div className="container sign-up-container">
			
	<div className="card bg-light" style={{ borderRadius: '12px'}}>
	<article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	{/* <p className="text-center">Get started with your free account</p> */}
	{/* <p>
		<a href="" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
		<a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
	</p> */}
	{/* <p className="divider-text">
        <span className="bg-light">OR</span>
    </p> */}
	<form onSubmit={signUpSubmitHandler}>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="First name" type="text" onChange={onInputFirstname} required={true}></input>
    </div>
    <div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="bi bi-person-dash-fill"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="Last name" type="text" onChange={onInputLastname} required={true}></input>
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="Email address" type="email" onChange={onInputUsername} required={true}></input>
    </div> 
    {/* <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
		</div>
		<select className="custom-select" style={{maxWidth: '120px'}}>
		    <option selected="">+971</option>
		    <option value="1">+972</option>
		    <option value="2">+198</option>
		    <option value="3">+701</option>
		</select>
    	<input name="" className="form-control" placeholder="Phone number" type="text"></input>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
		</div>
		<select className="form-control">
			<option selected=""> Select job type</option>
			<option>Designer</option>
			<option>Manager</option>
			<option>Accaunting</option>
		</select>
	</div>  */}
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Create password" id="password" type="password" value={password} onChange={onInputPassword} required={true}></input>
		<div className="input-group-append">
            <span className="input-group-text" onClick={password_show_hide}>
                <i className="fas fa-eye" id="show_eye"></i>
                <i className="fas fa-eye-slash" id="hide_eye" style={{ display: 'none'}}></i>
            </span>
        </div>
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Repeat password" id="rePassword" type="password" value={rePassword} onChange={onInputRePassword} required={true}></input>
		<div className="input-group-append">
            <span className="input-group-text" onClick={re_pass_password_show_hide}>
                <i className="fas fa-eye" id="re_pass_show_eye"></i>
                <i className="fas fa-eye-slash" id="re_pass_hide_eye" style={{ display: 'none'}}></i>
            </span>
        </div>
    </div>                                     
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> SignUp  </button>
    </div>    
    {/* <p className="text-center">Have an account? <a href="/logi">Log In</a> </p>     */}
    <p className="text-center">Have an account? <Link to={"/login"}>Login</Link> </p>    
    {/* <p className="text-center">Have an account? <span className='signup-login-btn' onClick={props.isShowLogin}>Log In</span> </p> */}
</form>
</article>
</div> 
{/* <SwitchToComponent /> */}
</div> 

    );
    
}

export default SignUp;