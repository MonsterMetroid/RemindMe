// get elements
const txtEmail = document.getElementById('email-input');
const txtPassword = document.getElementById('password-input');
const txtphoneNumber = document.getElementById('phone-number-input');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logoutButton');
const signupButton = document.getElementById('signup-button');
const phonenumberButton = document.getElementById('phoneButton');
var userSignedIn = false;


// initailize firebase \\
var config = {
     apiKey: "AIzaSyAhCyPqOp9XfEGJvb1rFdqiDbQxL_ioi9o",
     authDomain: "remindme-ea1a5.firebaseapp.com",
     databaseURL: "https://remindme-ea1a5.firebaseio.com",
     projectId: "remindme-ea1a5",
     storageBucket: "remindme-ea1a5.appspot.com",
     messagingSenderId: "831972778332"
};
     firebase.initializeApp(config);
     var database = firebase.database();
     var provider = new firebase.auth.GoogleAuthProvider();

     // add event-listenr to login button, and when clicked... \\
     loginButton.addEventListener('click', e => {

     // get email and password \\
     const email = txtEmail.value;
     const password = txtPassword.value;
     const auth = firebase.auth();

     // sign in \\
     const promise = auth.signInWithEmailAndPassword(email, password);

     // clear email and password inputs \\
     $("#email-input").val(" ");
     $("#password-input").val(" ");


     promise.catch(e => console.log(e.message));
});



          // attach listener to signup button 
signupButton.addEventListener('click', e => {
          // get email an password \\
          const email = txtEmail.value;
          const password = txtPassword.value;

          const auth = firebase.auth();
          

          // create user and sign user in \\
          const promise = auth.createUserWithEmailAndPassword(email, password);

          promise.catch(e => console.log(e.message));
 })
          // add event-listener to phoneNumber button
phonenumberButton.addEventListener('click', e => {
          const userNumber = txtphoneNumber.value;
          console.log("userPhoneNumber  " + txtPhonenumber);
          console.log(userNumber);
 })
     


// add real-time  listener for user logged-in status 
firebase.auth().onAuthStateChanged(firebaseUser => {
     // if user signed in
     if (firebaseUser) {
          console.log(firebaseUser);
          // hide unneeded login and signup features 
          $("#email-input, #password-input, #login-button, #formText, #formText1, #login-with-google-button, #signup-button, #phone-number-input, #phoneButton").hide();
          // show logout button
          


          // do nothing until user logs in or signs up
     } else {
          console.log('not logged in');
          $("#email-input, #password-input, #login-button, #formText, #formText1, #signup-button, #phone-number-input, #phoneButton").show();
          $("#logoutButton").hide();

     }
});

// add logout events \\
logoutButton.addEventListener('click', e => {
     firebase.auth().signOut();
     $("#login-button, #email-input, #password-input, #formText1, #formText, #signup-button").show();
})

