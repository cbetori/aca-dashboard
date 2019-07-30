import React from "react";
import { Layout, Statistic, Card, Row, Col, Icon  } from 'antd'
import Cards from './Cards'
import FundsSizeContainer from '../../containers/FundsSizeContainer'
import {FundsCardResult} from '../../containers/FundsContainer'
import { DistroChartContainer } from '../../containers/DistributionContainer'

//const { Content } = Layout;

function Main(props) {
  console.log(props)
  return (
    <Layout>
      <Cards/>
      <div className='container'>
        <FundsSizeContainer/>
        <DistroChartContainer/>
      </div>
      <FundsCardResult/>
    </Layout>
  );
}
export default Main;