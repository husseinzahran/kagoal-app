import React from 'react';
import logo from './logo.svg';

function App() {
  var useLoginIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-login-icon"></use>'
  var useRegisterIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-register-icon"></use>'
  return (
    <div className="App">
      <div class="registration-login-form">
         
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#home" role="tab">
                <svg class="olymp-login-icon" dangerouslySetInnerHTML={{__html: useLoginIcon }} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#profile" role="tab">
                <svg class="olymp-register-icon" dangerouslySetInnerHTML={{__html: useRegisterIcon }} />
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
              <div class="title h6">Register to Kagoal</div>
              <form class="content">
                <div class="row">
                  <div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group label-floating">
                      <label class="control-label">First Name</label>
                      <input class="form-control" id="FName" placeholder="" type="text"/>
                    </div>
                  </div>
                  <div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group label-floating">
                      <label class="control-label">Last Name</label>
                      <input id="LName" class="form-control" placeholder="" type="text" />
                    </div>
                  </div>
                  <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group label-floating">
                      <label class="control-label">Your Email</label>
                      <input class="form-control" placeholder="" type="email" id="emailsignup" name="emailsignup" />
                    </div>
                    <div class="form-group label-floating">
                      <label class="control-label">Your Password</label>
                      <input class="form-control" placeholder="" type="password" id="passwordsignup" name="passwordsignup" />
                    </div>
        
                    <div class="remember">
                      <div class="checkbox">
                        <label>
                          <input name="optionsCheckboxes" type="checkbox" />
                          I accept the <a href="#">Terms and Conditions</a> of the website
                        </label>
                      </div>
                    </div>
                    <button onClick="handleSignUp();return false;"  class="btn btn-purple btn-lg full-width" id="quickstart-sign-up" name="signup">Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
        
            <div class="tab-pane" id="profile" role="tabpanel" data-mh="log-tab">
              <div class="title h6">Login to your Account</div>
              <form class="content">
                <div class="row">
                  <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group label-floating">
                      <label class="control-label" >Your Email</label>
                      <input class="form-control" placeholder="" type="email" id="email" name="email" />
                    </div>
                    <div class="form-group label-floating">
                      <label class="control-label">Your Password</label>
                      <input class="form-control" placeholder="" type="password" id="password" name="password" />
                    </div>
        
                    <div class="remember">
        
                      <div class="checkbox">
                        <label>
                          <input name="optionsCheckboxes" type="checkbox" />
                          Remember Me
                        </label>
                      </div>
                      <a href="#" class="forgot" data-toggle="modal" data-target="#restore-password">Forgot my Password</a>
                    </div>
        
                    <button onClick="toggleSignIn(); return false;" class="btn btn-lg btn-primary full-width" id="quickstart-sign-in" name="signin">Sign In</button>
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

export default App;
