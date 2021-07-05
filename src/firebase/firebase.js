import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDFxV6IA6hmZWtcs3MZmwB5_hT4OS3eIHs",
  authDomain: "expensify-61625.firebaseapp.com",
  databaseURL: "https://expensify-61625-default-rtdb.firebaseio.com",
  projectId: "expensify-61625",
  storageBucket: "expensify-61625.appspot.com",
  messagingSenderId: "930729495628",
  appId: "1:930729495628:web:f8119e07460938671938e9",
  measurementId: "G-V3D7TMLNTM"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
























export {firebase , database as default};



// database.ref('expenses').push({
// description : 'dresses',
// note : 'is very heap',
// amount : 23,
// createdAt : 9797907
// })

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id : childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
// console.log(expenses)
// })



// const database = firebase.database();


// database.ref('expenses').push({
// description : 'dresses',
// note : 'is very heap',
// amount : 23,
// createdAt : 9797907
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id : childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
// console.log(expenses)
// })



// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//     console.log(val);
//     console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`)
// })

// database.ref().off();





// database.ref().on('value' , (snapshot) => {
//    console.log(snapshot.val()) 
// })

// setTimeout(()=> {
//   database.ref('age').set(27);
// }, 3500)






// database.ref().once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val)
// }).catch((error) => {
//   console.log('an error' ,error)
// })



// database.ref().set({
//   name : 'Mitra Davoudi',
//   stressLevel : 6 ,
//   job : {
// title : 'software developer',
// company : 'google'
//   },
//   age : 32,
//   isSingle : false,
//   location : {
//     city : "Calgary",
//     country : "Canada"
//   }
// }).then(() => {
//   console.log('data is saved!')
// }).catch((e) => {
//   console.log('thisis failed!' , e)
// })

// database.ref('isSingle').remove().then(() => {
// console.log('removed successfully')
// }).catch((error) => {
//   console.log('it didnt deleted successfully', error)
// })



// database.ref().update({
//  stressLevel : 9,
//  'job/company' : 'Amazon',
//  'location/city' : 'Seattle'
// });


