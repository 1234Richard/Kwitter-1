// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA0qFgsog_OAZLKr8loDifsoXZW9N_BZRs",
      authDomain: "kwitter-342ad.firebaseapp.com",
      databaseURL: "https://kwitter-342ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-342ad",
      storageBucket: "kwitter-342ad.appspot.com",
      messagingSenderId: "94487825700",
      appId: "1:94487825700:web:adbaa196600d3cfc8e77b1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
