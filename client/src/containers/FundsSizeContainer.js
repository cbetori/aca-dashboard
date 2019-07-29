import { connect } from "react-redux";
import FundsPieChart from "../components/Funds/FundsSizeComponent";

function mapStateToProps(state) {
  return {
    fundsSize: state.fundsSize
  };
}

export default connect(mapStateToProps)(FundsPieChart);