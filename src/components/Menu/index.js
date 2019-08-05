import React from "react";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import { userLogout } from "../../actions/users";
import { FETCH_PRODUCTS } from "../../actions/types";

const { SubMenu } = Menu;

const categories = ["Earphones", "Charger", "Cases", "Phones", "Speakers"];

class Navbar extends React.Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  handleLogout = async e => {
    const { userLogout } = this.props;
    await userLogout();
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Add
            </span>
          }
        >
          <Menu.Item key="add1">Company</Menu.Item>
          <Menu.Item key="add2">Products</Menu.Item>
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Categories
            </span>
          }
        >
          {categories.map(category => (
            <Menu.Item key={category}>{category}</Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { userLogout }
)(Navbar);
