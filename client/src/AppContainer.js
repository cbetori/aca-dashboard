import App from './App'
import './App.css'
import { connect } from 'react-redux'
import {loadFunds, loadFundsSize} from "./actions/actions";

function mapDispatchToProps(dispatch) {
  return {
    loadFunds: function () {
      dispatch(loadFunds())
        },
      loadFundsSize: function () {
      dispatch(loadFundsSize())
        }
    }
}

export default connect(null,mapDispatchToProps)(App)