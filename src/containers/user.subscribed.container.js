import { connect } from "react-redux";
import Subscribed from "../components/user/subscribed";
import { getSubscribed } from "../actions/asyncAction";

const mapStateToProps = state => {
  return { subscribed: state.subscribed };
};

const mapDispatchToProps = dispatch => {
  return {
    getSubscribed: () => dispatch(getSubscribed())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribed);
