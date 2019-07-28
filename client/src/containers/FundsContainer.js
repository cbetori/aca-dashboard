import { connect } from "react-redux";
import Funds from "../components/FundsComponent";

function mapStateToProps(state) {
  return {
    funds: state.funds
  };
}

export default connect(mapStateToProps)(Funds);
