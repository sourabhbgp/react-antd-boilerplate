import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

import { Typography, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Wrapper = styled.div`
  margin: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    &:first-child {
      line-height: 1.5;
      text-align: right;
      padding-right: 6px;

      display: flex;
      flex-flow: column;

      > span {
        line-height: 1.2;
      }
    }
  }
`;

const menu = logout => (
  <Menu style={{ minWidth: 133 }}>
    <Menu.Item key="0" disabled>
      <a disabled>Profile</a>
    </Menu.Item>

    <Menu.Divider />
    <Menu.Item key="1">
      <a onClick={logout}>Logout</a>
    </Menu.Item>
  </Menu>
);

class Header extends Component {
  state = {};

  onLogout = () => {
    this.props.logout();
    this.props.history.push("/auth");
  };

  render() {
    const { name, email } = this.props.auth;

    return (
      <Wrapper>
        <UserInfo>
          <div>
            <Text>{_.capitalize(name)}</Text>
            <Text type="secondary">Administrator</Text>
          </div>
          <Dropdown overlay={() => menu(this.onLogout)} trigger={["click"]}>
            <Avatar
              style={{ cursor: "pointer" }}
              size="large"
              icon={<UserOutlined />}
            />
          </Dropdown>
        </UserInfo>
      </Wrapper>
    );
  }
}

export default Header;
