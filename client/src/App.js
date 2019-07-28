import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import FundsContainer from "./containers/FundsContainer";
import "antd/dist/antd.css";
import { Layout} from "antd";
import NavTop from "./components/NavTop";
import NavSide from "./components/NavSide";
//import Header from 'antd/lib/calendar/Header';

const { Content} = Layout;

class App extends Component {
  componentDidMount() {
    this.props.loadFunds();
    this.props.loadFundsSize();
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
                <Route path="/funds" component={FundsContainer} />
              </Content>
            </Switch>
          </BrowserRouter>
          </div>
      </Layout>
    );
  }
}

export default App;
