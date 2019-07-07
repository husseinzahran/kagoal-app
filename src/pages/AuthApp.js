
import React from 'react';
import logo from './logo.svg';

import {handleSignUp, toggleSignIn} from './kagoaljs/controllers/auth.js'
import firebase from 'firebase'


function AuthApp() {
  var useLoginIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-login-icon"></use>'
  var useRegisterIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-register-icon"></use>'
  return (
    <div className="App">
      <div className="registration-login-form">
         
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home" role="tab">
                <svg className="olymp-login-icon" dangerouslySetInnerHTML={{__html: useLoginIcon }} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#profile" role="tab">
                <svg className="olymp-register-icon" dangerouslySetInnerHTML={{__html: useRegisterIcon }} />
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
              <div className="title h6">Register to Kagoal</div>
              <form className="content">
                <div className="row">
                  <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group label-floating">
                      <label className="control-label">First Name</label>
                      <input className="form-control" id="FName" placeholder="" type="text"/>
                    </div>
                  </div>
                  <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group label-floating">
                      <label className="control-label">Last Name</label>
                      <input id="LName" className="form-control" placeholder="" type="text" />
                    </div>
                  </div>
                  <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group label-floating">
                      <label className="control-label">Your Email</label>
                      <input className="form-control" placeholder="" type="email" id="emailsignup" name="emailsignup" />
                    </div>
                    <div className="form-group label-floating">
                      <label className="control-label">Your Password</label>
                      <input className="form-control" placeholder="" type="password" id="passwordsignup" name="passwordsignup" />
                    </div>
        
                    <div className="remember">
                      <div className="checkbox">
                        <label>
                          <input name="optionsCheckboxes" type="checkbox" />
                          I accept the <a href="#">Terms and Conditions</a> of the website
                        </label>
                      </div>
                    </div>
                    <button onClick={handleSignUp} type="button" className="btn btn-purple btn-lg full-width" id="quickstart-sign-up" name="signup">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
        
            <div className="tab-pane" id="profile" role="tabpanel" data-mh="log-tab">
              <div className="title h6">Login to your Account</div>
              <form className="content">
                <div className="row">
                  <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group label-floating">
                      <label className="control-label" >Your Email</label>
                      <input className="form-control" placeholder="" type="email" id="email" name="email" />
                    </div>
                    <div className="form-group label-floating">
                      <label className="control-label">Your Password</label>
                      <input className="form-control" placeholder="" type="password" id="password" name="password" />
                    </div>
        
                    <div className="remember">
        
                      <div className="checkbox">
                        <label>
                          <input name="optionsCheckboxes" type="checkbox" />
                          Remember Me
                        </label>
                      </div>
                      <a href="#" className="forgot" data-toggle="modal" data-target="#restore-password">Forgot my Password</a>
                    </div>
        
                    <button onClick={toggleSignIn} type="button" className="btn btn-lg btn-primary full-width" id="quickstart-sign-in" name="signin">Sign In</button>
                    <p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}


export default AuthApp;
