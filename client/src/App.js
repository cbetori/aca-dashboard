import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import { FundsCardResult } from "./containers/FundsContainer";
import "antd/dist/antd.css";
import { Layout} from "antd";
import NavTop from "./components/Layout/NavTop";
import NavSide from "./components/Layout/NavSide";
//import Header from 'antd/lib/calendar/Header';

const { Content} = Layout;

class App extends Component {
  componentDidMount() {
    this.props.loadFunds();
    this.props.loadFundsSize();
    this.props.loadInvestments();
    this.props.loadDistributions();
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
          <NavTop />
          <div id='container' style={{display: 'flex'}}>
          <NavSide />
          <BrowserRouter>
            <Switch>
              <Content style={{marginLeft: 10}}>
                <Route path="/" exact component={Main} />
                <Route path="/funds" component={FundsCardResult} />
              </Content>
            </Switch>
          </BrowserRouter>
          </div>
      </Layout>
    );
  }
}

export default App;
