import React, {useState, useEffect} from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Card, Input, Modal, Table, Button } from 'antd'
import { shallowEqual, useSelector} from 'react-redux'
import TableSelect from '../Reusable/TableSelect'
import moment from 'moment'
import numeral from 'numeral'


function InvestorDetail (props) {
//Props State
    const propsHolder = useSelector( props => props)
    const propsDetails = useSelector(props => props.investorsInvID.map(res =>res.details))
    const propsCash = useSelector(props =>props.investorsInvID.map(res => res.cashflows))

//Other State
    const [tableData, tableDataSet] = useState([])
    const [barChartData,barChartDataSet] = useState([])
    const [barChartColumns,barChartColumnsSet] = useState([])
    const [cardDataCash, cardDataCashSet] = useState([])
    const [cardDataDetail, cardDataDetailSet] = useState([])

    function getCardDataDetail(){
        let tempObject = {}
        for(let element in propsDetails[0]){
            tempObject = propsDetails[element][0]
        }
        cardDataDetailSet(tempObject)
    }

    function getCardDataCash(){
        let tempArray = []
        let cash = getCashFlowTotals()
        for(let element in cash){
            cash[element] = numeral(cash[element]).format('$0,0')
            tempArray.push(<p key={element}>{element}:  {cash[element]}</p>)
        }
        cardDataCashSet(tempArray)
    }

    function getCashFlowTotals(){
        const tempObject ={
            'Gross Distribution': 0, 'Special Distribution':0,'Composite Tax Distro':0, 'Tax Distribution':0,
            'Tax Holdback':0, 'GP Promote':0, 'Management Fee':0, 'Servicing Fee':0, 'Commission':0, 
        }
        propsCash.forEach(array => {
            array.forEach((row, index)=>{
                try{
                    tempObject[row.Code_Name] += row.CF_Amount
                }catch(err){}
            })
        })
        return tempObject
    }

    let columns = [
        {title: 'Edit', dataIndex:'Edit',  key: 'Edit', width: '10%'},
        {title: 'InvID', dataIndex:'InvID',  key: 'InvID', width: '15%'},
        {title: 'CID', dataIndex:'CID', key: 'CID', width: '15%'},
        {title: 'Code_Name', dataIndex:'Code_Name',  key: 'Code_Name', width: '20%'},
        {title: 'CF_Amount', dataIndex:'CF_Amount', key: 'CF_Amount', width: '20%'},
        {title: 'CF_Date', dataIndex:'CF_Date',  key: 'CF_Date', width: '20%'},
    ]   
    function getTableData(){
        let tempArray = []
        const cashArray = JSON.parse(JSON.stringify(propsCash))
        cashArray.forEach(array => {
            array.forEach((row, index)=>{
                row.CF_Date = moment(row.CF_Date).format('MM/DD/YYYY')
                row.CF_Amount = numeral(row.CF_Amount).format('$0,0')
                row.Edit= (<Button type="primary" key={index} onClick={showModal}>Edit</Button>)
                tempArray.push(row)
            })
        })
        tableDataSet(tempArray)
    }

    function getBarChartData(){
         //Create cashflow total card. Create array to hold barchart data. Create array to hold <Bar> tags.  
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042',  '#FF8042', '#FF8042', '#FF8042', '#FF8042', '#FF8042'];
        let tempArrayData = []
        let tempArrayColumns =[]
        let count = 0
        let cash = getCashFlowTotals()
        for(let element in cash){
            if(cash[element] > 0 ){
                tempArrayData.push({distrotype: element, amount: cash[element]})
                tempArrayData[count][element] = cash[element]
                tempArrayColumns.push(<Bar key={element} dataKey={element} fill={COLORS[count]}/>)
                    count += 1
            }
        }
        barChartColumnsSet(tempArrayColumns)
        barChartDataSet(tempArrayData)
    }
 
    useEffect(()=>{
        getCashFlowTotals()
        getTableData()
        getBarChartData()
        getCardDataCash()
        getCardDataDetail()
        console.log('x')
    },[propsHolder]) 

    //Modal
        const [visible, setVisible]= useState(false)
        const [confirmLoading, setConfirmLoading]= useState(false)
        
        function showModal(){
            setVisible(true)
        };

        function handleOk () {
            setConfirmLoading(false)
            setTimeout(() => {
                setVisible(false)
                setConfirmLoading(false)
            }, 2000);
        };

        function handleCancel () {
            setVisible(false)
          };

        return(
            <div style={{background: '#ECECEC'}}>
                <div style={{display: 'flex',padding: '30px' }}>
                    <Card title={cardDataDetail.Account_Name} bordered={false} style={{ width: 300, margin:25 }}>
                        <p>InvId:           {cardDataDetail.InvID}</p>
                        <p>CID:             {cardDataDetail.CID}</p>
                        <p>Feeder:          {cardDataDetail.Feeder}</p>
                        <p>Inv Type:        {cardDataDetail.Inv_Type}</p>
                        <p>Gross Capital:   {numeral(cardDataDetail.Gross_Capital).format('$0,0')}</p>
                        <p>Net Capital:     {numeral(cardDataDetail.Net_Capital).format('$0,0')}</p>
                        <p>Start Date:      {moment(cardDataDetail.Date_Inv).format('MM/DD/YYYY')}</p>
                        <p>End Date:        {moment(cardDataDetail.Date_Eliminate).format('MM/DD/YYYY')}</p>
                    </Card>
                    <br/>
                    <Card title='Cashflows' bordered={false} style={{ width: 300, margin:25 }}>
                        {cardDataCash}
                    </Card>
                    <BarChart
                        width={900}
                        height={500}
                        data={barChartData}
                        margin={{
                        top: 25, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="distrotype" />
                        <YAxis dataKey="amount"/>
                        <Tooltip />
                        {barChartColumns}
                    </BarChart>
                </div>
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >

                </Modal>
                    <Table style={{marginRight: 75, background: '#f1f3f5'}} columns= {columns} dataSource={tableData} />
                    {/* <Table onClick={showModal} style={{marginRight: 75, background: '#f1f3f5'}} columns= {columns} dataSource={tableData} /> */}
            </div>
        )
}

export default InvestorDetail