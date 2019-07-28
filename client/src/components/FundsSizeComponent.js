import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts"

//Proivde $ comparison between funds
function FundsPieChart(props) {
    // let data = props.fundsSize.map( res => {Fund_id: res.Fund_ID, Sum: res.Sum_of_Gross_Capital.toLocalSting('en')})
    // console.log(data)
    // let datasets = [{data:[props.fundsSize.map(res=> res.sum_of_gross_capital)]}]
    // let labels = [...props.fundsSize.keys()]
    // let data = {datasets: datasets, labels: labels}
    // console.log(data)
    // let doughnutChart = new Chart({
    //   type: 'doughnut',
    //   data: data,
    // })
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <PieChart width={500} height={500} >
        <Pie data={props.fundsSize} dataKey="sum_of_gross_capital" nameKey="Fund_ID" label legendType="square"  fill="#000">
          {props.fundsSize.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Legend/>
    </PieChart >
  );
}
export default FundsPieChart;