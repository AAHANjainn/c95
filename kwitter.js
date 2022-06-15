var firebaseConfig = {
  apiKey: "AIzaSyBPtAhMWWp9fFO7g8_mX50O6GWeu-4HM4c",
  authDomain: "lets-chat-5e6a7.firebaseapp.com",
  databaseURL: "https://lets-chat-5e6a7-default-rtdb.firebaseio.com",
  projectId: "lets-chat-5e6a7",
  storageBucket: "lets-chat-5e6a7.appspot.com",
  messagingSenderId: "483953185380",
  appId: "1:483953185380:web:21d2422d5df2c425bb0571"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

welcome_name = localStorage.getItem("username");
document.getElementById("welcome_username").innerHTML = welcome_name;

function add()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose :"adding room name"
  });
  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room_names = " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row; 
//End code
});});}
getData();

function redirectToRoomName(room_name)
{
  console.log(room_name);
  localStorage.setItem("room_name" , room_name);
  window.location = "kwitter_page.html" ;
}