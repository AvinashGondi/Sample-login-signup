import React,{ useState } from "react";
import { Link } from "react-router-dom";
import './login.css'

const Login = (props) => {

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    // const [showSignUP,setShowSignup] = useState(false);

    const onInputLoginUsername = (event) => {
        setEnteredUsername(event.target.value);
    }

    const onInputLoginPassword = ( event ) => {
        setEnteredPassword(event.target.value);
    }

    const onLogin = (event) => {
        event.preventDefault();
        console.log(enteredUsername+" "+enteredPassword)
    }

    // const onClickRegister = () => {
    //     setShowSignup(true);

    //     props.isShowSignup(showSignUP);
    // }


    function password_show_hide_login() {
        var x = document.getElementById("password_login");
        var show_eye = document.getElementById("show_eye_login");
        var hide_eye = document.getElementById("hide_eye_login");
        hide_eye.classList.remove("d-none");
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

    return (<div className="container-fluid">
    <div className="row d-flex justify-content-center align-items-center m-0" style={{height: '100vh'}}>
      <div className="login_oueter">
        <form action="" method="post" id="login" autoComplete="off" className="bg-light border p-3" onSubmit={onLogin} style={{borderRadius: '6px'}}>
          <div className="form-row">
            <h4 className="title my-3">Login For Access</h4>
            <div className="col-12">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span>
                </div>
                <input name="" className="form-control" placeholder="Email address" type="email" onChange={onInputLoginUsername} required={true}></input>
                {/* <input name="" type="text" value="" className="form-control" id="username" placeholder="Username"></input> */}
              </div>
            </div>
            <div className="col-12">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span>
                </div>
                {/* <input name="password" type="password" value="" className="input form-control" id="password_login" placeholder="password" required={true} aria-label="password" aria-describedby="basic-addon1" /> */}
                <input className="form-control" placeholder="Password" id="password_login" type="password" onChange={onInputLoginPassword} required={true}></input>
                <div className="input-group-append">
                  <span className="input-group-text" onClick={password_show_hide_login}>
                    <i className="fas fa-eye" id="show_eye_login"></i>
                    <i className="fas fa-eye-slash" id="hide_eye_login" style={{ display: 'none'}}></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group form-check text-left">
                <input type="checkbox" name="remember" className="form-check-input" id="remember_me" />
                <label className="form-check-label" htmlFor="remember_me">Remember me</label>
              </div>
            </div>
            <div className="col-sm-12 pt-3 text-right">
              {/* <p>Already registered <span type="button" onClick={props.isShowSignup} className="login-register_btn">Register</span></p> */}
              {/* <p>Already registered <a href="/signup/signup.js">Register</a></p>  */}
              <p>Already registered <Link to={"/signup"}>Register</Link></p> 
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit" name="signin">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>);
}

export default Login;