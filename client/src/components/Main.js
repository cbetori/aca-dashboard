import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import FundsSizeContainer from '../containers/FundsSizeContainer'

const { Header, Content, Footer, Sider } = Layout;



function Main(props) {
  console.log(props)
  return (
    <Content>
      <FundsSizeContainer/>
    </Content>
  );
}
export default Main;