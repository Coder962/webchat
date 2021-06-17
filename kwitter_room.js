
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyALtwu8o5BYubIlHSt9znJJC8rHze4HFTE",
      authDomain: "kwitter-9e107.firebaseapp.com",
      projectId: "kwitter-9e107",
      storageBucket: "kwitter-9e107.appspot.com",
      messagingSenderId: "766067234807",
      appId: "1:766067234807:web:86c17fb6228c094140c0f2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
