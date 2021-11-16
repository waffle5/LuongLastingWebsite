
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


//function addClientv1() {
//    var database_ref = database.ref()
//    
//    email = document.getElementById('email').value
//    first_name = document.getElementById('first_name').value
//    last_name = document.getElementById('last_name').value
//    number_of_services = document.getElementById('number_of_services').value
//    
//    var client_data = {
//        clientID: first_name + Date.now(), 
//        first_name : first_name,
//        last_name : last_name,
//        email : email,
//        number_of_services : number_of_services
//    }
//    
//    database_ref.child('clients/' + client_data.clientID).set(client_data)
//    
//    alert('Client Added!!')
//    
//}

function saveResponsev1() {
    var database_ref = database.ref()
    
    var response_data = {
        responseID: $("#client").val()+ + Date.now(),
        email: $("#inputEmail").val(),
        artist: $("#artist").val(),
        client: $("#client").val(),
        dateOfEvent: $("#dateOfEvent").val(),
        nonBrideMakeup: $("#nonBrideMakeup").val(),
        nonBrideHair: $("#nonBrideHair").val(),
        nonBrideHairSetting: $("#nonBrideHairSetting").val(),
        nonBrideHairStyling: $("#nonBrideHairStyling").val(),
        children: $("#children").val(),
        brideMakeup: $("#brideMakeup").val(),
        brideHair: $("#brideHair").val(),
        brideHairSetting: $("#brideHairSetting").val(),
        brideHairStyling: $("#brideHairStyling").val(),
        nonWeddingMakeup: $("#nonWeddingMakeup").val(),
        nonWeddingHair: $("#nonWeddingHair").val(),
        nonWeddingHairSetting: $("#nonWeddingHairSetting").val(),
        nonWeddingHairStyling: $("#nonWeddingHairStyling").val(),
        cashCheck: $("#cashCheck").prop("checked"),
        quickPayZelle: $("#quickPayZelle").prop("checked"),
        venmo: $("#venmo").prop("checked"),
        paypal: $("#paypal").prop("checked"),
        noPayment: $("#noPayment").prop("checked"),
        ammountColleted: $("#ammountColleted").val(),
        travelMiles: $("#travelMiles").val(),
        comments: $("#comments").val()
    }
    database_ref.child('responses/' + response_data.responseID).set(response_data)
    alert('Services recorded!!')
}

function addClient() {
    var database_ref = database.ref()
    
    var client_data = {
        clientID: $("#first_name").val() + Date.now(), 
        first_name : $("#first_name").val(),
        last_name : $("#last_name").val(),
        email : $("#email").val(),
        number_of_services : $("#number_of_services").val()
    }
    
    console.log(client_data)
    
    database_ref.child('clients/' + client_data.clientID).set(client_data)
    
    alert('Client Added!!')
    
}

function addArtist() {
    var database_ref = database.ref()
    
    email = document.getElementById('artistEmail').value
    first_name = document.getElementById('artistFirstName').value
    last_name = document.getElementById('artistLastName').value
    distance_to_studio = document.getElementById('artistDistanceToStudio').value
    bride_makeup_pay = document.getElementById('artistBridePayMakeUp').value
    bride_hair_pay = document.getElementById('artistBridePayHair').value
    Nonbride_makeup_pay = document.getElementById('artistNonBridePayMakeUp').value
    Nonbride_hair_pay = document.getElementById('artistNonBridePayHair').value
    
    
    
    var artist_data = {
        artistID: first_name + Date.now(),
        email : email,
        first_name : first_name,
        last_name : last_name,
        distance_to_studio : distance_to_studio,
        bride_makeup_pay : bride_makeup_pay,
        bride_hair_pay : bride_hair_pay,
        Nonbride_makeup_pay : Nonbride_makeup_pay,
        Nonbride_hair_pay : Nonbride_hair_pay
    }
    
    database_ref.child('artists/' + artist_data.artistID).set(artist_data)
    
    alert('Artist Added!!')
    
}

function saveResponses() {
    var database = database.ref()
    
    makeup_wedding = document.getElementById('makeup_wedding').value
    hair_wedding = document.getElementById('hair_wedding').value
    hair_setting_wedding = document.getElementById('hair_setting_wedding').value
    hair_styling_wedding = document.getElementById('hair_styling_wedding').value
    children_wedding = document.getElementById('children_wedding').value
    
    makeup_bride = document.getElementById('makeup_bride').value
    hair_bride = document.getElementById('hair_bride').value
    hair_setting_bride = document.getElementById('hair_setting_bride').value
    hair_styling_bride = document.getElementById('hair_styling_bride').value
    
    makeup_non_wedding = document.getElementById('makeup_non_wedding').value
    hair_non_wedding = document.getElementById('hair_non_wedding').value
    hair_setting_non_wedding = document.getElementById('hair_setting_non_wedding').value
    hair_styling_non_wedding = document.getElementById('hair_styling_non_wedding').value
    
//    cash = document.getElementById('cash').value
//    chase_quickpay_zelle = document.getElementById('chase_quickpay_zelle').value
//    venmo = document.getElementById('venmo').value
//    paypal = document.getElementById('paypal').value
//    no_payment = document.getElementById('no_payment').value
//    other = document.getElementById('other').value
    
    amount_collected = document.getElementById('amount_collected').value
//    no_travel = document.getElementById('no_travel').value
//    travel = document.getElementById('travel').value
    travel_miles = document.getElementById('travel_miles').value
    comments = document.getElementById('comments').value
    
    var responses = {
        makeup_wedding : makeup_wedding,
        hair_wedding : hair_wedding,
        hair_setting_wedding : hair_setting_wedding,
        hair_styling_wedding : hair_styling_wedding,
        children_wedding : children_wedding,
        makeup_bride : makeup_bride,
        hair_bride : hair_bride,
        hair_setting_bride : hair_setting_bride,
        hair_styling_bride : hair_styling_bride,
        makeup_non_wedding : makeup_non_wedding,
        hair_non_wedding : hair_non_wedding,
        hair_setting_non_wedding : hair_setting_non_wedding,
        hair_styling_non_wedding : hair_styling_non_wedding,
//        cash : cash,
//        chase_quickpay_zelle : chase_quickpay_zelle,
//        venmo : venmo,
//        paypal : paypal,
//        no_payment : no_payment,
//        other : other,
        amount_collected : amount_collected,
//        no_travel : no_travel,
//        travel : travel,
        travel_miles : travel_miles,
        comments : comments
    }
    
   // database.child('user_responses/').push(responses)
    
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

function populateDropDowns(){
    populateClientListv2()
    populateArtistList()
}

function populateClientListv2() {
    var database_ref = database.ref()
    
    var select = document.getElementById("client");
    
    database_ref.child('clients').once('value',
                                      function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var option = document.createElement("option");
                var fullName = CurrentRecord.val().first_name + " " + CurrentRecord.val().last_name
                option.value = CurrentRecord.val().clientID
                option.text = fullName
                select.appendChild(option)
            }
        )
    })
    
}

function populateArtistList() {
    var database_ref = database.ref()
    
    var select = document.getElementById("artist");
    
    database_ref.child('artists').once('value',
                                      function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var option = document.createElement("option");
                var fullName = CurrentRecord.val().first_name + " " + CurrentRecord.val().last_name
                option.value = CurrentRecord.val().artistID
                option.text = fullName
                select.appendChild(option)
            }
        )
    })

}

/*Calculating the wedding services*/
function getTotalServices(){
    var arr = document.getElementsByClassName('wedding');
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        if(parseInt(arr[i].value)){
            total += parseInt(arr[i].value);
        }
        
        document.getElementById('totalServices').value = total;
    }
    
    
}

function getTotalServicesBridal(){
    var arr = document.getElementsByClassName('bride');
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        if(parseInt(arr[i].value)){
            total += parseInt(arr[i].value);
        }
        
        document.getElementById('totalServicesBride').value = total;
    }
    
    
}

function getTotalServicesNonWedding(){
    var arr = document.getElementsByClassName('non-wedding');
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        if(parseInt(arr[i].value)){
            total += parseInt(arr[i].value);
        }
        
        document.getElementById('totalServicesNonWedding').value = total;
    }
    
    
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
