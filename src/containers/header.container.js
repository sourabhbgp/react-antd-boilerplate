import { connect } from "react-redux";
import Header from "../components/header";
import {} from "../actions/asyncAction";
import { logout } from "../actions/syncAction";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch(logout()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
