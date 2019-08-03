import React from "react";
import { Layout } from 'antd'
import Cards from './Cards'
import FundsSizeContainer from '../../containers/FundsSizeContainer'
import {FundsCardResult} from '../../containers/FundsContainer'
import { DistroChartContainer, DistroPieChartContainer } from '../../containers/DistributionContainer'

//const { Content } = Layout;

function Main(props) {
  console.log(props)
  return (
    <Layout>
      <Cards/>
      <h1 className='mainContainer'>Distribution Information</h1>
      <div className='container'>
        <DistroPieChartContainer/>
        <DistroChartContainer className='spacer'/>
      </div>
      <h1 className='mainContainer'>Fund Information</h1>
      <div className='container'>
        <FundsSizeContainer/>
        <FundsCardResult/>
      </div>
    </Layout>
  );
}
export default Main;