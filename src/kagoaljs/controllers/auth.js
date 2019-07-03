import firebase from 'firebase'
import swal from 'sweetalert'
class User{
  constructor(firstName, lastName, userId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userId = userId;
  }
}

  
function addUserRecord(user){
  
 
  

  // Get a reference to the database service
  var db = firebase.firestore();

  var userData ={
    user_id:user.userId,
    firstname: user.firstName,
    lastname: user.lastName,
  };

  db.collection("users").add(userData)
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      window.location.replace("goals.html");
  })  
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

}

function toggleSignIn(e) {
  e.stopPropagation();
  if (firebase.auth().currentUser) {
    // [START signout]
    firebase.auth().signOut();
    // [END signout]
  } 
  else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
      		
  	if (email.length === 0) {
      ShowsweetAlert('Please enter an email address.');
      return;

    }

   if (validateEmail(email) === false) {
      ShowsweetAlert('Please enter correct  email address.');
      return;
    }
          
    if (password.length === 0) {
      ShowsweetAlert('Please enter an Password.');
      return;

    }

    // Sign in with email and pass.
    // [START authwithemail]
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
      

      window.location.replace("goals.html");
      
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          ShowsweetAlert('Wrong password.');
        } else {
          ShowsweetAlert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authwithemail]
  }

  document.getElementById('quickstart-sign-in').disabled = true;
}
    /**
     * Handles the sign up button press.
     */
function handleSignUp(e) {
  e.stopPropagation();
  var FName=document.getElementById("FName").value;
  var LName=document.getElementById("LName").value;
  var email=document.getElementById("emailsignup").value;
  var password=document.getElementById("passwordsignup").value;


  if (FName.length === 0) {
    ShowsweetAlert(" Please enter an First Name ");
  	return;
  }
 
  if (LName.length === 0) {
    ShowsweetAlert("Please enter an Last Name ");
		return;
  }
  
  if (email.length === 0) {
    ShowsweetAlert("Please enter an email address.");
		return;
  }

  if (validateEmail(email) === false) {
    ShowsweetAlert("Email not correct ");
    return;
  }
    
  if (password.length === 0) {
    ShowsweetAlert("Please enter a password.");
    return;
  }
 
  if ( CheckPassword(password) === false) {
      ShowsweetAlert("Password  must be 8 -16 and have Lower case , upperCase");
      return;
  }
  
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    var uid = user.user.uid;
    console.log(uid);

    var userObj = new User(FName, LName, uid);
    addUserRecord(userObj);
  })

  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      ShowsweetAlert('The password is too weak.');
    } else {
      ShowsweetAlert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END createwithemail]
  return false;
}
    
/**
 * Sends an email verification to the user.
 */
function sendEmailVerification() {
  // [START sendemailverification]
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email Verification sent!
    // [START_EXCLUDE]
    alert('Email Verification Sent!');
    // [END_EXCLUDE]
  });
  // [END sendemailverification]
}
    
function sendPasswordReset() {
  var email = document.getElementById('emailreset').value;
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Password Reset Email Sent!
    // [START_EXCLUDE]
    ShowsweetAlertSuccess('Password Reset Email Sent!');
    // [END_EXCLUDE]
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/invalid-email') {
      ShowsweetAlert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      ShowsweetAlert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
  // [END sendpasswordemail];
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
  // Listening for auth state changes.
  // [START authstatelistener]
  firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    //document.getElementById('quickstart-verify-email').disabled = true;
    // [END_EXCLUDE]
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // [START_EXCLUDE]
      //document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
      //document.getElementById('quickstart-sign-in').textContent = 'Sign out';
      //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
      if (!emailVerified) {
       // document.getElementById('quickstart-verify-email').disabled = false;
      }
      // [END_EXCLUDE]
    } else {
      // User is signed out.
      // [START_EXCLUDE]
      //document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
      document.getElementById('quickstart-sign-in').textContent = 'Sign in';
      //document.getElementById('quickstart-account-details').textContent = 'null';
      // [END_EXCLUDE]
    }
    // [START_EXCLUDE silent]
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });
  // [END authstatelistener]
  document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
  document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
  //document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
 // document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
}
window.onload = function() {
    require('dotenv').config()
   var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  initApp();
};
	
	
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function ShowsweetAlert(err) {
  swal({
    title: "Oops!",
    icon: "error",
    text: err,
  });
}

function ShowsweetAlertSuccess(messageTxt) {
  swal({
    title: "Success",
    icon: "success",
    text: messageTxt,
  });
}

function CheckPassword(inputtxt) 
{ 
  var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  if(inputtxt.match(decimal)) { 
    return true;
  }
  else{ 
    return false;
  }
}


export {
    toggleSignIn,
    handleSignUp,
    
}