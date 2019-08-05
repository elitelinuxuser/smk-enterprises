import React, { Component, Fragment } from "react";
import Menu from "../Menu";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchUser } from "../../actions/users";
import Home from "./Home";
import Loader from "react-loaders";
import "./Dashboard.scss";

class Dashboard extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const { fetchUser } = this.props;
    await fetchUser();
    this.setState({
      loading: false
    });
  }

  redirectToLogin = () => {
    if (this.props.auth.user !== null) {
      return <Redirect to="/" />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  render() {
    const { loading } = this.state;
    if (this.props.auth.user === null && this.props.auth.isLoading === false) {
      return (
        <div className="container" align="center">
          {this.redirectToLogin()}
        </div>
      );
    } else if (this.props.auth.isLoading === true) {
      return (
        <div className="loading-container">
          <Loader type="pacman" />
        </div>
      );
    } else
      return (
        <Fragment>
          <Menu />
          <Home />
        </Fragment>
      );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(Dashboard);
