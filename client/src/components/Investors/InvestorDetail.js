import React, { useState, useEffect } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Card, Table } from 'antd'
import moment from 'moment'
import numeral from 'numeral'

function InvestorDetail (props) {

        //Add account details to its own object
        let dataDetails = props.investorsInvID.map(res => res.details[0])
        let details = {}
        for (let element in dataDetails[0]){
            details[element] = dataDetails[0][element]
        }
        //Create an object to store cashflow total additional create clean array of cashdata
        let dataCash = props.investorsInvID.map(res => res.cashflows)
        let cashData = []
        let cashFlowTotals = {
            'Gross Distribution': 0, 
            'Special Distribution':0,
            'Composite Tax Distro':0, 
            'Tax Distribution':0,
            'Tax Holdback':0, 
            'GP Promote':0, 
            'Management Fee':0, 
            'Servicing Fee':0, 
            'Commission':0, 
        }

        dataCash.forEach(array => {
            array.forEach((row, index)=>{
                try{
                    cashFlowTotals[row.Code_Name] += row.CF_Amount
                    row.CF_Date = moment(row.CF_Date).format('MM/DD/YYYY')
                    row.CF_Amount = numeral(row.CF_Amount).format('$0,0')
                    cashData.push(row)
                }catch(err){}
            })
        });

        //Create cashflow total card
        let cashTotals = []
        let barChartData = []
        for(let element in cashFlowTotals){
            barChartData.push({distrotype: element, amount: cashFlowTotals[element]})
            cashFlowTotals[element] = numeral(cashFlowTotals[element]).format('$0,0')
            cashTotals.push(<p>{element}:  {cashFlowTotals[element]}</p>)
        }
        let columns = [
            {title: 'InvID', dataIndex:'InvID',  key: 'InvID', width: '5%'},
            {title: 'CID', dataIndex:'CID', key: 'CID', width: '5%'},
            {title: 'Code_Name', dataIndex:'Code_Name',  key: 'Code_Name', width: '10%'},
            {title: 'CF_Amount', dataIndex:'CF_Amount', key: 'CF_Amount', width: '10%'},
            {title: 'CF_Date', dataIndex:'CF_Date',  key: 'CF_Date', width: '10%'},
        ]
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        return(
            <React.Fragment>
                <div style={{display: 'flex', background: '#ECECEC', padding: '30px' }}>
                    <Card title={details.Account_Name} bordered={false} style={{ width: 300, margin:25 }}>
                        <p>InvId:   <emsp/>    {details.InvID}</p>
                        <p>CID:         {details.CID}</p>
                        <p>Feeder:      {details.Feeder}</p>
                        <p>Inv Type:      {details.Inv_Type}</p>
                        <p>Gross Capital:      {numeral(details.Gross_Capital).format('$0,0')}</p>
                        <p>Net Capital:     {numeral(details.Net_Capital).format('$0,0')}</p>
                        <p>Start Date:    {moment(details.Date_Inv).format('MM/DD/YYYY')}</p>
                        <p>End Date:    {moment(details.Date_Eliminate).format('MM/DD/YYYY')}</p>
                    </Card>
                    <br/>
                    <Card title='Cashflows' bordered={false} style={{ width: 300, margin:25 }}>
                        {cashTotals}
                    </Card>
                    <BarChart
                        width={900}
                        height={300}
                        data={barChartData}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    > {cashTotals.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="distrotype" />
                        <YAxis dataKey="amount"/>
                        <Tooltip />
                        <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                </div>
                <div >
                    <Table columns= {columns} dataSource={cashData} />
                </div>
            </React.Fragment>
        )
    
}

export default InvestorDetail