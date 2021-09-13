var firebaseConfig = {
      apiKey: "AIzaSyDBb31Bq2OfylyaM51hdjlPXtIwr4jTUqE",
      authDomain: "kwitter-fbbe9.firebaseapp.com",
      databaseURL: "https://kwitter-fbbe9-default-rtdb.firebaseio.com",
      projectId: "kwitter-fbbe9",
      storageBucket: "kwitter-fbbe9.appspot.com",
      messagingSenderId: "645777369094",
      appId: "1:645777369094:web:e9c650b137ef05a354fb87"
    };

    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

    function send(){
          msg= document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name, 
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
    }