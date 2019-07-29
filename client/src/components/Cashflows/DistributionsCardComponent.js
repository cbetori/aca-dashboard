import React from "react";
import { Statistic, Card, Col, Icon } from 'antd'

function DistributionsCard(props) {
    console.log(props)
    let distroTotal = props.distributions.reduce((a, b)=>a + b.CF_Amount,0)
  return (
    <React.Fragment>
        <Col span={5}>
            <Card>
                <Statistic
                title="Total Distributions Paid"
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix="$"
                suffix=""
                value={distroTotal}
                >
                </Statistic>
            </Card>
        </Col>
    </React.Fragment>
  );
}
export default DistributionsCard;