import { connect } from "react-redux";
import Auth from "../components/auth";
import { postLogin } from "../actions/asyncAction";

const mapStateToProps = state => {
  return { auth: state.auth };
};

const mapDispatchToProps = dispatch => {
  return {
    postLogin: data => dispatch(postLogin(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
