import React, { Component } from 'react';
import {
  Card,CardBody,CardFooter,CardHeader,CardTitle,Col,
  Row,Table,CardColumns
} from 'reactstrap';
import { Bar} from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {options} from './Options.js'




export default class BarChart extends Component {
  render(){
      const {products} = this.props
      let labels = products.map(prod => prod.name)
      let sales = products.map(prod => prod.total_sales)
      let price = products.map(prod => prod.price)
      const bar = {
      labels:labels,
      datasets: [
        {
          label: 'Total Product Sales',
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: sales,
        },
        {
          label: 'Product Price',
          backgroundColor: '#FF6384',
          borderColor: '#FF6384',
          borderWidth: 1,
          hoverBackgroundColor: '#c2e3f9',
          hoverBorderColor: '#c2e3f9',
          data: price,
        },
      ],
    };
    return(
        <Card>
            <CardHeader>
              Bar Chart
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Bar data={bar} options={options} />
              </div>
            </CardBody>
          </Card>
      )
  }
} 