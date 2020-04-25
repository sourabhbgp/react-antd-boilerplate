import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import _ from "lodash";
import HeaderContiner from "../containers/header.container";
import { getDate } from "../utils/basic";
import {
  UserOutlined,
  PieChartOutlined,
  DatabaseOutlined,
  EditOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Logo = styled.div`
  text-align: center;
  margin: 16px 0;

  height: 30px;
  > p {
    margin: 0;
  }
  > p > b {
    color: #a3cb38;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.3px;
    text-align: center;
  }
  > p > span {
    padding: 0 6px;
    font-size: 14px;
    color: #fff;
  }
`;

const MENU = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <PieChartOutlined />,
    submenu: []
  },
  {
    name: "User",
    icon: <UserOutlined />,
    submenu: [{ menu1: "Subscribed", url: "/user/subscribed" }]
  },
  {
    name: "Data",
    icon: <DatabaseOutlined />,
    submenu: []
  },
  {
    name: "Blog",
    icon: <EditOutlined />,
    submenu: []
  }
];

const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Today = styled.span`
  padding: 0 8px;
  font-weight: bold;
  font-size: 1rem;
`;

class LayoutCover extends Component {
  state = {
    collapsed: false,
    panelName: "thesmarttv",
    panelVersion: "v.1",
    // activekey: ["0"],
    footer: "thesmarttv Dashboard ©2020 Pvt Ltd"
  };

  onCollapse = collapsed => this.setState({ collapsed });

  onMenuClick = (event, data) => {};

  _renderDate = data => {
    const { day, date, month } = getDate(data);
    return `${day}, ${date} ${month}`;
  };

  renderBreadcrumb = () => {
    const { pathname } = this.props.location;
    const PATH = _.filter(pathname.split("/"), PATH => PATH !== "");
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        {_.map(PATH || [], (p, i) => (
          <Breadcrumb.Item key={i}>{p}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  };

  render() {
    const { children } = this.props;

    const { collapsed, panelName, panelVersion, footer } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          theme="dark"
        >
          <Logo>
            {!collapsed && (
              <p>
                <b>{panelName}</b> <span>{panelVersion}</span>
              </p>
            )}
          </Logo>
          <Menu
            theme="dark"
            mode="inline"
            // selectedKeys={activekey}
            defaultSelectedKeys={["0"]}
          >
            {_.map(MENU, (data, index) => {
              if (data.submenu.length) {
                return (
                  <SubMenu
                    key={`sub${index + 1}`}
                    title={
                      <span>
                        {data.icon}
                        <span>{data.name}</span>
                      </span>
                    }
                  >
                    {_.map(data.submenu, (data1, i) => {
                      return (
                        <Menu.Item key={`${index}-${i}`}>
                          <Link to={data1.url}>{data1.menu1}</Link>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item
                    key={index}
                    onClick={event => this.onMenuClick(event, data)}
                  >
                    <Link to={data.url}>
                      {data.icon}
                      <span>{data.name}</span>
                    </Link>
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ display: "flex", background: "#fff", padding: 0 }}>
            <HeaderContiner></HeaderContiner>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Middle>
              {this.renderBreadcrumb()}
              <Today>{this._renderDate(new Date())}</Today>
            </Middle>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>{footer}</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(LayoutCover);
