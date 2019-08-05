import { FETCH_USER } from "./types";
import { authRef } from "../config/firebase";

// Fetch User Login Data
export const fetchUser = () => async dispatch => {
  console.log("Fetch Executed");
  authRef.onAuthStateChanged(user => {
    dispatch({
      type: FETCH_USER,
      payload: user
    });
  });
};

//User Logout
export const userLogout = () => async dispatch => {
  authRef.signOut().then(() => {
    localStorage.removeItem("smktoken");
    fetchUser();
  });
};

//User Login
export const userLogin = (email, password) => async dispatch => {
  console.log("Login Function");
  authRef
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      localStorage.setItem("smktoken", "awesome");
      console.log("Signed In");
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    })
    .catch(error => {
      console.log(error.code + " " + error.message);
    });
};
