// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAeLsCVCg-g8_4NgQthTmZ281Ywc2bwxqo",
  authDomain: "productshop-5d1e7.firebaseapp.com",
  projectId: "productshop-5d1e7",
  storageBucket: "productshop-5d1e7.appspot.com",
  messagingSenderId: "512604963755",
  appId: "1:512604963755:web:5b4830bc6310e0142d48ee",
  measurementId: "G-Z0F1QNHJKB"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getTodoSocket = (cb) => {
    this.database.ref("data").on("value", (snap) => {
      cb && cb(snap.val());
    });
  };

  offTodoSocket = () => {
    this.database.ref("data").off();
  };

  postTodo = (key, todo) => {
    this.database.ref("data/" + key).set(todo);
  };

  addTodo = (data) => {
    const newKey = this.database.ref().child("data").push().key;
    this.database.ref("data/" + newKey).set(data);
  };

  deleteTodo = (key) => {
    this.database.ref("data/" + key).remove();
  };
}

export default Firebase;