import React, { Component, Fragment } from "react";
import { Typography } from "antd";

const { Title } = Typography;

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Title level={4}>Dashboard</Title>
      </Fragment>
    );
  }
}

export default Dashboard;
