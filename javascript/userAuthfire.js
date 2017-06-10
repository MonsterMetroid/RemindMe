// get elements
const txtEmail = document.getElementById('email-input');
const txtPassword = document.getElementById('password-input');
const txtName = document.getElementById('name-input');
const txtUsername = document.getElementById('username-input');
const txtphoneNumber = document.getElementById('phone-number-input');
const txtMessage = document.getElementById('message-input');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
var signupButton = document.getElementById('signup-button');
const phonenumberButton = document.getElementById('phoneButton');
const scheduleMessageButton = document.getElementById('scheduleMessgeButton');




// // initailize firebase \\
// Initialize Firebase
// Initialize Firebase
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

// add event-listenr to login button, and when clicked... \\
loginButton.addEventListener('click', e => {

     // get email and password \\
     const email = txtEmail.value;
     const password = txtPassword.value;
     let userPnumber = txtphoneNumber.value;
     const auth = firebase.auth();
     console.log("target phone number---> " + userPnumber);

     if (userPnumber.length === 10) {


          // sign in \\
          const promise = auth.signInWithEmailAndPassword(email, password);

          // clear email and password inputs \\
          $("#email-input").val("");
          $("#password-input").val("");
          $("#phone-number-input").val("");


          promise.catch(e => console.log(e.message));
     } else {
          $('#message').text("Please enter a valid Phonenumber to send an SMS to - example: 456-777-8899").css({'color' :'red'});
          $("#email-input").val("");
          $("#password-input").val("");
          $("#phone-number-input").val("");


     }
});

signupButton.addEventListener('click', e => {

     // get email an password \\
     const email = txtEmail.value;
     const password = txtPassword.value;
     const phoneNumber = txtphoneNumber.value;
     const username = txtUsername.value;
     const auth = firebase.auth();




     // create user and sign user in \\
     const promise = auth.createUserWithEmailAndPassword(email, password);

     promise.catch(e => console.log(e.message));
     // store related variables in object \\
     var user = {

          email: email,
          number: phoneNumber,
          username: username,
          password: password

     }

     // push user object to database, refrencing username as child_node name \\
     database.ref(username).push(user);

     console.log("------>" + user.number);

     this.phoneNumber = user.number;



});
// Upon new entry to database, update html with new data \\
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
     // Store everything into a variable.
     const userName = childSnapshot.val().name;
     const destination = childSnapshot.val().number;


});


// add real-time  listener for user logged-in status 
firebase.auth().onAuthStateChanged(firebaseUser => {
     // if user signed in
     if (firebaseUser) {
          database.ref().on("child_added", function(childSnapshot, prevChildKey) {
                    // Store everything into a variable.
                    const userName = childSnapshot.val().name;
                    const destination = childSnapshot.val().number;

                    console.log("logged in");
                    // hide unneeded login and signup features 
                    $("#messaging-container, #email-input, #password-input, #name-input, #username-input, #login-button, #signup-button, #phone-number-input, #formText, #login-container, #register-container").hide();
                    // show logout button and messaging feautures 
                    $("#logout-button, #scheduleMessageButton, #messaging-container").show();
                    $("#message").text(" ");


               })
               // do nothing until user logs in or signs up
     } else {
          console.log('not logged in');
          // show needed input field
          $("#email-input, #password-input, #login-button, #formText, #formText1, #signup-button, #phone-number-input, #phoneButton, #register-container, #login-container").show();
          // hide unneeded fields
          $("#logout-button, #scheduleMessageButton, #messaging-container").hide();

     }
});

// add logout events \\
logoutButton.addEventListener('click', e => {
     firebase.auth().signOut();
     $("#login-button, #email-input, #password-input, #formText1, #formText, #signup-button").show();
     $("#email-input, #password-input, #phone-number-input, #username-input, #name-input").text(" ");
});
