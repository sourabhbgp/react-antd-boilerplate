import React, { Component } from "react";
import { connect } from "react-redux";
import {} from "../actions/asyncAction";
import { authRefresh } from "../actions/syncAction";
import { withRouter } from "react-router-dom";
import Layout from "../layout";

const PATH = {
  LOGIN: "/auth",
  DASHBOARD: "/dashboard",
  BASE: "/"
};

export default ComposedComponent => {
  class RequireAuth extends Component {
    componentDidMount = () => {
      this.verify();
    };

    verify = () => {
      const { history, location } = this.props;
      const TOKEN = localStorage.getItem("token");

      if (TOKEN) {
        this.props.authRefresh(TOKEN);
        location.pathname === PATH.LOGIN || location.pathname === PATH.BASE
          ? history.push(PATH.DASHBOARD)
          : history.push(location.pathname);
      } else history.push(PATH.LOGIN);
    };

    render() {
      return (
        <Layout>
          <ComposedComponent {...this.props} />
        </Layout>
      );
    }
  }

  const mapStateToProps = state => {
    return {};
  };

  const mapDispatchToProps = dispatch => {
    return { authRefresh: data => dispatch(authRefresh(data)) };
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(RequireAuth));
};
