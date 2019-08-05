import { connect } from "react-redux";
import InvestorDetail from "../components/Investors/InvestorDetail";

function mapStateToProps(state) {
  return {
    investorsInvID: state.investorsInvID
  };
}

export const InvestorDetailResult = connect(mapStateToProps)(InvestorDetail);