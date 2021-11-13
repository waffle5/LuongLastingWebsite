
/*JAVASCRIPT*/

var firebaseConfig = {
    apiKey: "AIzaSyCtx1n_Oe7r_lR6cnbLiQ4o6DyCHZdR36s",
    authDomain: "luonglasting-10c6e.firebaseapp.com",
    projectId: "luonglasting-10c6e",
    storageBucket: "luonglasting-10c6e.appspot.com",
    messagingSenderId: "411017503270",
    appId: "1:411017503270:web:3f979d8988701d1ebb7ce7"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function register() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    first_name = document.getElementById('first_name').value
    last_name = document.getElementById('last_name').value
    travel_distance = document.getElementById('travel_distance').value
    
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        var user = auth.currentUser

        // Add this user to Firebase Database
        var database_ref = database.ref()

        // Create User data
        var user_data = {
          email : email,
          first_name : first_name,
          last_name : last_name,
          password : password,    
          travel_distance : travel_distance,
          last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)
        
    alert('User Created!!')
    MainPage()
    
    })
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })
}


function addClient() {
    var database_ref = database.ref()
    
    email = document.getElementById('email').value
    first_name = document.getElementById('first_name').value
    last_name = document.getElementById('last_name').value
    number_of_services = document.getElementById('number_of_services').value
    
    
    
    var client_data = {
        first_name : first_name,
        last_name : last_name,
        email : email,
        number_of_services : number_of_services
    }
    
    database_ref.child('clients/').push(client_data)
    
    alert('Client Added!!')
    
}

function saveResponses() {
    var database = database.ref()
    
    responses = document.querySelectorAll("p.wedding, p.bride, p.non_wedding, p.payment, p.amount_collected, p.travel, p.travel_miles, p.comments");
    
    var res = {
        responses : responses
    }
    
    database.child('user_responses/').push(res)
    
    alert('User responses saved!')
}

function populateClientList() {
    var database_ref = database.ref()
    
    var select = document.createElement("select");
    select.name = "clientList";
    select.id = "clientList";
    
    database_ref.child('clients').once('value',
                                      function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var option = document.createElement("option");
                var fullName = CurrentRecord.val().first_name + " " + CurrentRecord.val().last_name
                option.value = fullName
                option.text = fullName
                select.appendChild(option)
            }
        )
    })
    
    var lable = document.createElement("lable");
    lable.innerHTML = "Select Client: "
    lable.htmlFor = "clients"
    
    document.getElementById("clients").appendChild(lable).appendChild(select)
    console.log("Hello")
}

function MainPage(){

login()
const previousBtn = document.getElementById('Previous');
const nextBtn = document.getElementById('Next');
const submitBtn = document.getElementById('Submit');
const bullets = [...document.querySelectorAll('.bullets')];

let current = 0;
const max = 2;

previousBtn.style.display = 'none';
submitBtn.style.display = 'none';

nextBtn.addEventListener('click', () => {
  bullets[current].classList.add('completed');
  current += 1;
  previousBtn.style.display = 'inline';
  
  if(current === max) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline';
  }
});

previousBtn.addEventListener('click', () => {
  bullets[current - 1].classList.remove('completed');
  current -= 1;
  submitBtn.style.display = 'none';
  nextBtn.style.display = 'inline';
  if( current === 0){
    previousBtn.style.display = 'none';
  }
});

submitBtn.addEventListener('click', () => {
  location.reload(); /*Saving information in DB*/
});

}


//Login as a registered user
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  loginErrorMsg = document.getElementById("login-error-msg");

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
      loginErrorMsg.style.opacity = 1;
    return
    // Don't continue running the code
  }
    

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)
      
    // DOne
    alert('User Logged In!!')
    
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
  
    //Redirects logged in users to the main page
  auth.onAuthStateChanged(user => {
  if(user) {
    window.location = 'MainPage.html'; //After successful login, user will be redirected to home.html
  }
});  
    
}


// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

///*
///*Constant because they will not change*/
//const loginForm = document.getElementById("login-form");
//const loginButton = document.getElementById("login-form-submit");
//const loginErrorMsg = document.getElementById("login-error-msg");
///*"e" mouse event that represents the click*/
//loginButton.addEventListener("click", (e) => {
//  e.preventDefault();/*This prevents submission*/
//  const username = loginForm.username.value;
//  const password = loginForm.password.value;
//  /*if (username === && password === ){
//    alert("Success");
//    location.reload(); // go to our main menu
//  
//  }else {
//    loginErrorMsg.style.opacity = 1;
//  }*/
//  
//})-->*/
