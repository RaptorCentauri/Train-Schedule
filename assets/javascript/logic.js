  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQTJ1hmYeAiQ7lVoOlymFoIqmU2DpgkGE",
    authDomain: "train-schedule-327d2.firebaseapp.com",
    databaseURL: "https://train-schedule-327d2.firebaseio.com",
    projectId: "train-schedule-327d2",
    storageBucket: "train-schedule-327d2.appspot.com",
    messagingSenderId: "963744270848"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


// tname = $("#train-name").val().trim();

  var trainData = {

    trainName: null,
    destination: null,
    frequency: null,
    



  }





$(`#addTrain`).on(`click`, function(){
    console.log(`button works`);


  console.log($("#train-name").val().trim());
  trainData.trainName = $("#train-name").val().trim();
  console.log(trainData);


})




  