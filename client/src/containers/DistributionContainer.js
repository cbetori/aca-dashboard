import { connect } from "react-redux";
import DistributionsCard from '../components/Cashflows/DistributionsCardComponent';

function mapStateToProps(state) {
  return {
    distributions: state.distributions
  };
}

export default connect(mapStateToProps)(DistributionsCard);