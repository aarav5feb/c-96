//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCSZHFazIkQbgf--5EcjtIadYu_bl1S6N0",
      authDomain: "kwitter-b8442.firebaseapp.com",
      databaseURL: "https://kwitter-b8442-default-rtdb.firebaseio.com",
      projectId: "kwitter-b8442",
      storageBucket: "kwitter-b8442.appspot.com",
      messagingSenderId: "113522764159",
      appId: "1:113522764159:web:0adfd4ee36dab2e3aad24a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value ; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";

}