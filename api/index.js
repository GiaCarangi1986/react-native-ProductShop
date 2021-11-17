// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
// import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getData, removeID } from "./serializer";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAeLsCVCg-g8_4NgQthTmZ281Ywc2bwxqo",
  authDomain: "productshop-5d1e7.firebaseapp.com",
  projectId: "productshop-5d1e7",
});

const db = getFirestore(firebaseApp);

const add_first_doc = async () => {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  return docRef.id
}

const update_product_in_basket = async function (product = {}) {
  const obj = removeID(product)
  const upProductRef = doc(db, "products", obj.id);
  const res = await updateDoc(upProductRef, obj.product);
  return res
}

const get_products_in_basket = async function () {
  const querySnapshot = await getDocs(collection(db, "products"));
  const res = getData(querySnapshot)
  return res
}

export {
  add_first_doc, get_products_in_basket, update_product_in_basket
}