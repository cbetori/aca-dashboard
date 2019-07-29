import React from "react";
import { Row, Col } from 'antd'
import InvestmentsContainer from '../../containers/InvestmentsContainer'
import DistibutionsContainer from '../../containers/DistributionContainer'

function Cards(){
    return(
        <div style={{ background: '#ECECEC', padding: '50px' }}>
        <Row gutter={16}>
            <InvestmentsContainer/>
            <DistibutionsContainer/>
        </Row>
      </div>
    )
}

export default Cards
