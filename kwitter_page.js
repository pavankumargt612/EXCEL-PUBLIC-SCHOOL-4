var firebaseConfig = {
      apiKey: "AIzaSyCXzhtwlLzYDtYgqw49R-b_irWNLODLMwQ",
      authDomain: "kwitter-9f5c9.firebaseapp.com",
      databaseURL: "https://kwitter-9f5c9-default-rtdb.firebaseio.com",
      projectId: "kwitter-9f5c9",
      storageBucket: "kwitter-9f5c9.appspot.com",
      messagingSenderId: "375494067261",
      appId: "1:375494067261:web:654d03f0d10c22b4b7d654"
    };
    firebase.initializeApp(firebaseConfig);
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");
function send(){  
msg=document.getElementById("mst").value;
firebase.database().ref(room_name).push({
      name:user_name,
    message:msg,
    like:0
})
}
      
