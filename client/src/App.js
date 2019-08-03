import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout} from "antd";
import Main from "./components/Main/Main";
import NavTop from "./components/Layout/NavTop";
import NavSide from "./components/Layout/NavSide";
import { InvestorsTableResults } from "./containers/InvestorsContainer"
import { FundsCardResult } from "./containers/FundsContainer";
import  InvestorDetail from "./components/Investors/InvestorDetail"
//import Header from 'antd/lib/calendar/Header';

const { Content} = Layout;

class App extends Component {
  componentDidMount() {
    this.props.loadFunds();
    this.props.loadFundsSize();
    this.props.loadInvestors()
    this.props.loadInvestments();
    this.props.loadDistributions();
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
          <NavTop />
          <div id='container' style={{display: 'flex'}}>
          <BrowserRouter>
            <NavSide />
            <Switch>
              <Content style={{marginLeft: 10}}>
                <Route path="/" exact component={Main} />
                <Route path="/funds" component={FundsCardResult} />
                <Route path="/investors" exact component={InvestorsTableResults} />
                <Route path="/investors/:id" component={InvestorDetail} />
              </Content>
            </Switch>
          </BrowserRouter>
          </div>
      </Layout>
    );
  }
}

export default App;
