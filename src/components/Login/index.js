import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row } from "antd";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Redirect } from "react-router-dom";
import Loader from "react-loaders";
import "./Login.scss";
// import Logo from "../assets/logo-m.png";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("Cnst" + this.props.auth.user);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    const { fetchUser } = this.props;
    //Action creator to fetch User data and store it in Redux Store
    fetchUser();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { userLogin } = this.props;
        console.log("Received values of form: ", values);
        //Login with username and password
        userLogin(values.userName, values.password);
      }
    });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  // If the user is not signed in, redirect to Dashboard
  redirectToDashBoard = () => {
    if (this.props.auth.user !== null) {
      return <Redirect to="/" />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.props.auth.user !== null && this.props.auth.isLoading === false) {
      return (
        <div className="container" align="center">
          {this.redirectToDashBoard()}
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
        <Row className="row-form" type="flex" align="middle">
          <div align="center" className="container-fluid">
            {/* <img src={Logo} /> */}
            <h1>Login</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator("userName", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                  Forgot password?
                </a>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={this.state.loading}
                  onClick={this.enterLoading}
                >
                  {this.state.loading ? (
                    <span>Logging in</span>
                  ) : (
                    <span>Log in</span>
                  )}
                </Button>
              </FormItem>
            </Form>
          </div>
        </Row>
      );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
const mapStateToProps = ({ data, auth }) => ({
  data,
  auth
});

export default connect(
  mapStateToProps,
  actions
)(WrappedNormalLoginForm);
