
 var firebaseConfig = {
      apiKey: "AIzaSyCHdpzkoGVFwQSaY80-iIjxVVtkbn8nXc4",
      authDomain: "sc-web-d9352.firebaseapp.com",
      databaseURL: "https://sc-web-d9352.firebaseio.com",
      projectId: "sc-web-d9352",
      storageBucket: "sc-web-d9352.appspot.com",
      messagingSenderId: "646869777863",
      appId: "1:646869777863:web:b61e98dd024634f42c6de2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
