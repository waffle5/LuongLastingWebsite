
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
    database_ref.child('artists/' + response_data.artist).child('responses/' +response_data.responseID ).set(response_data)
    alert('Services recorded!!')
}

function addClient() {
    var database_ref = database.ref()
    
    var client_data = {
        clientID: $("#first_name").val() + Date.now(), 
        first_name : $("#first_name").val(),
        last_name : $("#last_name").val(),
        email : $("#email").val(),
    }
    
    console.log(client_data)
    
    database_ref.child('clients/' + client_data.clientID).set(client_data)
    
    
}

function addArtist() {
    var database_ref = database.ref()
    
    fn = $("#artistFirstName").val().trim()
    ln = $("#artistLastName").val().trim()
    
    if(fn== "" || ln== ""){
            alert('Please fill in artist name')
        } else {
             var artist_data = {
                artistID: $("#artistFirstName").val() + Date.now(),
                first_name : $("#artistFirstName").val(),
                last_name : $("#artistLastName").val(),

                nonBride_makeup_pay : $("#artistNonBridePayMakeUp").val(),
                nonBride_hair_pay : $("#artistNonBridePayHair").val(),
                nonBride_hair_setting_pay : $("#artistNonBridePayHairSetting").val(),
                nonBride_hair_styling_pay : $("#artistNonBridePayHairStyling").val(),
                children_pay: $("#artistChildrenPay").val(),

                bride_makeup_pay : $("#artistBridePayMakeUp").val(),
                bride_hair_pay : $("#artistBridePayHair").val(),
                bride_hair_setting_pay : $("#artistBridePayHairSetting").val(),
                bride_hair_styling_pay: $("#artistBridePayHairStyling").val(),

                nonWedding_makeup_pay : $("#artistNonWeddingPayMakeUp").val(),
                nonWedding_hair_pay : $("#artistNonWeddingPayHair").val(),
                nonWedding_hair_setting_pay : $("#artistNonWeddingPayHairSetting").val(),
                nonWedding_hair_styling_pay : $("#artistNonWeddingPayHairStyling").val(),

                distance_to_studio : $("#artistDistanceToStudio").val()
            }

            database_ref.child('artists/' + artist_data.artistID).set(artist_data)

            alert('Artist Added!!')
        }
    
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

function getAllArtist() {
    database.ref('artists').on('value',
                                function(AllRecords){
        $("#artistTableBody").empty()
        AllRecords.forEach(
            function(CurrentRecord){
                var artistId = CurrentRecord.val().artistID
                var brideHairPay = CurrentRecord.val().bride_hair_pay
                var brideHairSettingPay = CurrentRecord.val().bride_hair_setting_pay
                var brideHairStylingPay = CurrentRecord.val().bride_hair_styling_pay
                var brideMakeupPay = CurrentRecord.val().bride_makeup_pay
                var childrenPay = CurrentRecord.val().children_pay
                var distanceToStudio = CurrentRecord.val().distance_to_studio
                var firstName = CurrentRecord.val().first_name
                var lastName = CurrentRecord.val().last_name
                var nonBrideHairPay = CurrentRecord.val().nonBride_hair_pay
                var nonBrideHairSettingPay = CurrentRecord.val().nonBride_hair_setting_pay
                var nonBrideHairStylingPay = CurrentRecord.val().nonBride_hair_styling_pay
                var nonBrideMakeupPay = CurrentRecord.val().nonBride_makeup_pay
                var nonWeddingHairPay = CurrentRecord.val().nonWedding_hair_pay
                var nonWeddingHairSettingPay = CurrentRecord.val().nonWedding_hair_setting_pay
                var nonWeddingHairStylingPay = CurrentRecord.val().nonWedding_hair_styling_pay
                var nonWeddingMakeupPay = CurrentRecord.val().nonWedding_makeup_pay
                
                var tbody = document.getElementById('artistTableBody')
                
                var trow = document.createElement('tr')
                var td1 = document.createElement('td')
                var td2 = document.createElement('td')
                var td3 = document.createElement('td')
                var td4 = document.createElement('td')
                var td5 = document.createElement('td')
                var td6 = document.createElement('td')
                var td7 = document.createElement('td')
                var td8 = document.createElement('td')
                var td9 = document.createElement('td')
                var td10 = document.createElement('td')
                var td11 = document.createElement('td')
                var td12 = document.createElement('td')
                var td13 = document.createElement('td')
                var td14 = document.createElement('td')
                var td15 = document.createElement('td')
                var td16 = document.createElement('td')
                var td17 = document.createElement('td')
                var td18 = document.createElement('td')
                var td19 = document.createElement('td')
                     
                td1.innerHTML = '<span class="artist-data-firstName">'+firstName+'</span>'
                td2.innerHTML = '<span class="artist-data-lastName">'+lastName+'</span>'
                td3.innerHTML = '<span class="artist-data-nonBrideMakeupPay">'+nonBrideMakeupPay+'</span>'
                td4.innerHTML = '<span class="artist-data-nonBrideHairPay">'+nonBrideHairPay+'</span>'
                td5.innerHTML = '<span class="artist-data-nonBrideHairSettingPay">'+nonBrideHairSettingPay+'</span>'
                td6.innerHTML = '<span class="artist-data-nonBrideHairStylingPay">'+nonBrideHairStylingPay+'</span>'
                td7.innerHTML = '<span class="artist-data-childrenPay">'+childrenPay+'</span>'
                td8.innerHTML = '<span class="artist-data-brideMakeupPay">'+brideMakeupPay+'</span>'
                td9.innerHTML = '<span class="artist-data-brideHairPay">'+brideHairPay+'</span>'
                td10.innerHTML = '<span class="artist-data-brideHairSettingPay">'+brideHairSettingPay+'</span>'
                td11.innerHTML = '<span class="artist-data-brideHairStylingPay">'+brideHairStylingPay+'</span>'
                td12.innerHTML = '<span class="artist-data-nonWeddingMakeupPay">'+nonWeddingMakeupPay+'</span>'
                td13.innerHTML = '<span class="artist-data-nonWeddingHairPay">'+nonWeddingHairPay+'</span>'
                td14.innerHTML = '<span class="artist-data-nonWeddingHairSettingPay">'+nonWeddingHairSettingPay+'</span>'
                td15.innerHTML = '<span class="artist-data-nonWeddingHairStylingPay">'+nonWeddingHairStylingPay+'</span>'
                td16.innerHTML = '<span class="artist-data-distanceToStudio">'+distanceToStudio+'</span>'
                td17.innerHTML = '<button type="button" class="btn btn-primary edit-artist-button" data-bs-toggle="modal" data-bs-target="#editArtistModal">Edit Artist</button>'
                td18.innerHTML = '<button type="button" class="btn btn-primary delete-artist-button" data-bs-toggle="modal" data-bs-target="#deleteArtistModal">Delete Artist</button>'
                td19.innerHTML = '<span class="artist-data-artistId">'+artistId+'</span>'
                td19.style.display = "none"
                               
                trow.appendChild(td1)
                trow.appendChild(td2)
                trow.appendChild(td3)
                trow.appendChild(td4)
                trow.appendChild(td5)
                trow.appendChild(td6)
                trow.appendChild(td7)
                trow.appendChild(td8)
                trow.appendChild(td9)
                trow.appendChild(td10)
                trow.appendChild(td11)
                trow.appendChild(td12)
                trow.appendChild(td13)
                trow.appendChild(td14)
                trow.appendChild(td15)
                trow.appendChild(td16)
                trow.appendChild(td17)
                trow.appendChild(td18)
                trow.appendChild(td19) 
                
                tbody.appendChild(trow)
                  
            }
        )
    })
}

//populate edit artist pop with artist information
$(document).on("click",".edit-artist-button", function(){
    $btn = $(this);
    $tr = $btn.closest('tr');
    var firstName = $tr.find('.artist-data-firstName').text();
    var lastName = $tr.find('.artist-data-lastName').text();
    var nonBrideMakeupPay = $tr.find('.artist-data-nonBrideMakeupPay').text();
    var nonBrideHairPay = $tr.find('.artist-data-nonBrideHairPay').text();
    var nonBrideHairSettingPay = $tr.find('.artist-data-nonBrideHairSettingPay').text();
    var nonBrideHairStylingPay = $tr.find('.artist-data-nonBrideHairStylingPay').text();
    var childrenPay = $tr.find('.artist-data-childrenPay').text();
    var brideMakeupPay = $tr.find('.artist-data-brideMakeupPay').text();
    var brideHairPay = $tr.find('.artist-data-brideHairPay').text();
    var brideHairSettingPay = $tr.find('.artist-data-brideHairSettingPay').text();
    var brideHairStylingPay = $tr.find('.artist-data-brideHairStylingPay').text();
    var nonWeddingMakeupPay = $tr.find('.artist-data-nonWeddingMakeupPay').text();
    var nonWeddingHairPay = $tr.find('.artist-data-nonWeddingHairPay').text();
    var nonWeddingHairSettingPay = $tr.find('.artist-data-nonWeddingHairSettingPay').text();
    var nonWeddingHairStylingPay = $tr.find('.artist-data-nonWeddingHairStylingPay').text();
    var distanceToStudio = $tr.find('.artist-data-distanceToStudio').text();
    var artistId = $tr.find('.artist-data-artistId').text();
   
    $("#edit_artist_id").val(artistId)
    $("#editartistFirstName").val(firstName)
    $("#editartistLastName").val(lastName)
    
    $("#editartistNonBridePayMakeUp").val(nonBrideMakeupPay)
    $("#editartistNonBridePayHair").val(nonBrideHairPay)
    $("#editartistNonBridePayHairSetting").val(nonBrideHairSettingPay)
    $("#editartistNonBridePayHairStyling").val(nonBrideHairStylingPay)
    $("#editartistChildrenPay").val(childrenPay)
    
    $("#editartistBridePayMakeUp").val(brideMakeupPay)
    $("#editartistBridePayHair").val(brideHairPay)
    $("#editartistBridePayHairSetting").val(brideHairSettingPay)
    $("#editartistBridePayHairStyling").val(brideHairStylingPay)
    
    $("#editartistNonWeddingPayMakeUp").val(nonWeddingMakeupPay)
    $("#editartistNonWeddingPayHair").val(nonWeddingHairPay)
    $("#editartistNonWeddingPayHairSetting").val(nonWeddingHairSettingPay)
    $("#editartistNonWeddingPayHairStyling").val(nonWeddingHairStylingPay)
    
    $("#editartistDistanceToStudio").val(distanceToStudio)
      
    
    
})

//save edited changes for artist
function editArtistBtn() {
    
    var database_ref = database.ref()
    
   var artist_data = {
                artistID: $("#edit_artist_id").val(),
                first_name : $("#editartistFirstName").val(),
                last_name : $("#editartistLastName").val(),

                nonBride_makeup_pay : $("#editartistNonBridePayMakeUp").val(),
                nonBride_hair_pay : $("#editartistNonBridePayHair").val(),
                nonBride_hair_setting_pay : $("#editartistNonBridePayHairSetting").val(),
                nonBride_hair_styling_pay : $("#editartistNonBridePayHairStyling").val(),
                children_pay: $("#editartistChildrenPay").val(),

                bride_makeup_pay : $("#editartistBridePayMakeUp").val(),
                bride_hair_pay : $("#editartistBridePayHair").val(),
                bride_hair_setting_pay : $("#editartistBridePayHairSetting").val(),
                bride_hair_styling_pay: $("#editartistBridePayHairStyling").val(),

                nonWedding_makeup_pay : $("#editartistNonWeddingPayMakeUp").val(),
                nonWedding_hair_pay : $("#editartistNonWeddingPayHair").val(),
                nonWedding_hair_setting_pay : $("#editartistNonWeddingPayHairSetting").val(),
                nonWedding_hair_styling_pay : $("#editartistNonWeddingPayHairStyling").val(),

                distance_to_studio : $("#editartistDistanceToStudio").val()
            }

    database_ref.child('artists/' + artist_data.artistID).set(artist_data)
   
}

//delete Artist
$(document).on("click",".delete-artist-button", function(){
    $btn = $(this);
    $tr = $btn.closest('tr');
    var firstName = $tr.find('.artist-data-firstName').text();
    var lastName = $tr.find('.artist-data-lastName').text();
    var artistId = $tr.find('.artist-data-artistId').text();
    $("#delete_artist_id").val(artistId)
    
    $("#deleteArtistModalBody").text('Are you sure you want to delete ' + firstName + ' ' + lastName + '?')   
})

function deleteArtistBtn() {
    var database_ref = database.ref()
    var id = $("#delete_artist_id").val()
    database_ref.child('artists/' + id).remove()
}



function getAllClients () {
        
    
        database.ref('clients').on('value',
                                function(AllRecords){
        $("#clientTableBody").empty()
        AllRecords.forEach(
            function(CurrentRecord){
                var clientId = CurrentRecord.val().clientID
                var firstName = CurrentRecord.val().first_name
                var lastName = CurrentRecord.val().last_name
                var email = CurrentRecord.val().email
                
                var tbody = document.getElementById('clientTableBody')
                
                var trow = document.createElement('tr')
                var td1 = document.createElement('td')
                var td2 = document.createElement('td')
                var td3 = document.createElement('td')
                var td4 = document.createElement('td')
                var td5 = document.createElement('td')
                var td6 = document.createElement('td')             
                
                td1.innerHTML = '<span class="client-data-firstName">'+firstName+'</span>'
                td2.innerHTML = '<span class="client-data-lastName">'+lastName+'</span>'
                td3.innerHTML = '<span class="client-data-email">'+email+'</span>'
                td4.innerHTML = '<button type="button" class="btn btn-primary edit-client-button" data-bs-toggle="modal" data-bs-target="#editClient">Edit Client</button>'
                td5.innerHTML = '<button type="button" class="btn btn-primary delete-client-button" data-bs-toggle="modal" data-bs-target="#deleteClient">Delete Cient</button>'
                td6.innerHTML = '<span class="client-data-clientId">' +clientId+'</span>'
                td6.style.display = "none"

                trow.appendChild(td1)
                trow.appendChild(td2)
                trow.appendChild(td3)
                trow.appendChild(td4)
                trow.appendChild(td5)
                trow.appendChild(td6)

                tbody.appendChild(trow)
                
                   
            }
        )
    })
}

//populate edit client popup with client information
$(document).on("click",".edit-client-button", function(){
    $btn = $(this);
    $tr = $btn.closest('tr');
    var first = $tr.find('.client-data-firstName').text();
    var last = $tr.find('.client-data-lastName').text();
    var email = $tr.find('.client-data-email').text();
    var id = $tr.find('.client-data-clientId').text();
    $("#edit_client_first_name").val(first)
    $("#edit_client_last_name").val(last)
    $("#edit_client_email").val(email)
    $("#edit_client_id").val(id)
    
})

//save edited changes for client
function editClientBtn() {
    
    var database_ref = database.ref()
    
    var client_data = {
        clientID: $("#edit_client_id").val(), 
        first_name : $("#edit_client_first_name").val(),
        last_name : $("#edit_client_last_name").val(),
        email : $("#edit_client_email").val(),
    }
    
    database_ref.child('clients/' + client_data.clientID).set(client_data)

    
}

//delete client
$(document).on("click",".delete-client-button", function(){
    $btn = $(this);
    $tr = $btn.closest('tr');
    var first = $tr.find('.client-data-firstName').text();
    var last = $tr.find('.client-data-lastName').text();
    var id = $tr.find('.client-data-clientId').text();
    $("#delete_client_id").val(id)
    
    $("#deleteClientModalBody").text('Are you sure you want to delete ' + first + ' ' + last + '?')   
})

function deleteClientBtn() {
    var database_ref = database.ref()
    var id = $("#delete_client_id").val()
    database_ref.child('clients/' + id).remove()
}


function eventInfoNext() {
    $("#eventInfo-section").hide()
    $("#NonBride-section").show()
}

function nonBridePrev() {
    $("#eventInfo-section").show()
    $("#NonBride-section").hide()
}


function nonBrideNext() {
    $("#NonBride-section").hide()
    $("#bride-section").show()
}

function bridePrev() {
    $("#NonBride-section").show()
    $("#bride-section").hide()
}

function brideNext(){
    $("#bride-section").hide()
    $("#NonWedding-Section").show()
}

function nonNonWedingPrev(){
    $("#bride-section").show()
    $("#NonWedding-Section").hide()
}

function nonWeddingNext(){
    $("#misc-section").show()
    $("#NonWedding-Section").hide()
}

function miscPrev(){
    $("#misc-section").hide()
    $("#NonWedding-Section").show()
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

function calcTravel() {
    // equalTo() method returns items equal to the specified key or value
    var database_ref = database.ref('artists/' + addArtist().artistID).child('responses/' + saveResponsev1().responseID).equalTo('travelMiles')
    
    var cost = 0.55;
    // reading the travel miles data from Firebase database
    var miles = database_ref.on("value", function(snapshot) {
        var data = snapshot.val();
        console.log(data);
    }, function(error) {
        console.log("Error: " + error.code);
    });
    
    var travelCost = cost * miles;
}

function calcServicesAndCosts() {
    var database_ref = database.ref("artists/" + addArtist().artistID).child("responses/" + saveResponsev1().responseID)
    
    
    // reading the data of all services from Firebase
    var services = database_ref.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function(error) {
        console.log("Error: " + error.code);
    });
    
    var database_ref2 = database.ref("artists/" + addArtist().artistID)
    
    // reading the data of the cost of each service from Firebase
    var servicesCost = database_ref2.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function(error) {
        console.log("Error: " + error.code);
    });
    
    /* The formula used for calculating all of the services and their costs is: Σ(service * service cost).
    The summation is calculated below */
    var sum = 0;
    
    for(var i = 0; i <= services.length; i++) {
        sum += (services[i] * servicesCost[i]);
    }
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
function showHome(){
    document.getElementById("myform").style.display="block";
}
function showClients() {
  document.getElementById("myform").style.display = "none";
  document.getElementById("recordServicesTitle").style.display = "none";
}
function showArtists(){
    
    document.getElementById("myform").style.display = "none";
}
function showPaySummary(){
    /*Hide form elements*/
    document.getElementById("myform").style.display = "none";
    document.getElementById("recordServciesTitle").style.display = "none";
    
    var database_ref = database.ref()
    
    var payment = document.getElementById("summaryOfPayment");
    
    database_ref.child('artists').once('value',
                                      function(AllRecords){
        AllRecords.forEach(
            function(CurrentRecord){
                var paymentDisplay = document.createElement("paymentDisplay");
                //var paymentDisplay = document.getElementById("summaryOfPayment");
                var nonbrideHairPay = CurrentRecord.val().Nonbride_hair_pay
                var nonbrideMakeupPay = CurrentRecord.val().Nonbride_makeup_pay
                var brideHairPay = CurrentRecord.val().bride_hair_pay
                var brideMakeupPay = CurrentRecord.val().bride_makeup_pay
                
                var paymentSummary = nonbrideHairPay + '\n' + nonbrideMakeupPay + '\n' +
                    brideHairPay + '\n' + brideMakeupPay
                
                paymentDisplay.value = CurrentRecord.val().artistID
                paymentDisplay.text = paymentSummary
                payment.appendChild(paymentDisplay)
            }
        )
    })

}
function showResponses(){
    /*Show all responses */
    document.getElementById("myform").style.display = "hidden";
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
