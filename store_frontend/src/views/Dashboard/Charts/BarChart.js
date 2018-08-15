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
      const bar = {
      labels:labels,
      datasets: [
        {
          label: 'Total Product Sales',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: sales,
        },
      ],
    };
    return(
        <Card>
            <CardHeader>
              Bar Chart
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
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