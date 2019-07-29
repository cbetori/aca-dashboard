import React from "react";
import { Layout, Statistic, Card, Row, Col, Icon  } from 'antd'
import Cards from './Cards'
import FundsSizeContainer from '../../containers/FundsSizeContainer'
import {FundsCardResult} from '../../containers/FundsContainer'

//const { Content } = Layout;

function Main(props) {
  console.log(props)
  return (
    <Layout>
      <Cards/>
      <FundsSizeContainer/>
      <FundsCardResult/>
    </Layout>
  );
}
export default Main;