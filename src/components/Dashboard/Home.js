import React, { Component } from "react";
import { db } from "../../config/firebase";

class Home extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    db.collection("products")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          //   console.log(doc.id, " => ", doc.data());
          doc
            .data()
            .awesomeref.get()
            .then(newdata => {
              console.log(newdata.data());
            });
        });
      });
  }

  render() {
    console.log(this.state);
    return <div>Data</div>;
  }
}

export default Home;
