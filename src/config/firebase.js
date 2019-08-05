import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

export const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
export const buyRef = db.collection("buy_orders");
export const rentRef = db.collection("rent_orders");
export const packageRef = db.collection("package_orders");
export const returnRef = db.collection("rent_returns");
export const authRef = firebase.auth();
