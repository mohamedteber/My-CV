var firebaseConfig = {
    apiKey: "AIzaSyC1dv9JsZoUHksRAB80_yX-LLN5QnGszhg",
    authDomain: "my-cv-4beff.firebaseapp.com",
    databaseURL: "https://my-cv-4beff.firebaseio.com",
    projectId: "my-cv-4beff",
    storageBucket: "my-cv-4beff.appspot.com",
    messagingSenderId: "499578982825",
    appId: "1:499578982825:web:153eb1c78048989ecb34b8",
    measurementId: "G-RGREBJN8PJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref('contact');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    console.log("test");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    saveMessage(name, email, subject, message);
}


function saveMessage(name, email, subject, message) {
    var newMessageRef = firebase.database().ref('contact/' + name);
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message

    });
}