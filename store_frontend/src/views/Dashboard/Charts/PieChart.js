import React, { Component } from 'react';
import {
  Card,CardBody,CardFooter,CardHeader,CardTitle,Col,
  Row,Table,CardColumns
} from 'reactstrap';
import {Pie } from 'react-chartjs-2';
import {options} from './Options.js'


export default class PieChart extends Component {
  render(){
    const {products} = this.props
    let labels = products.map(prod => prod.name)
    let sales = products.map(prod => prod.total_sales)
    let price = products.map(prod => prod.price)
    
    const pie = {
      labels: labels,
      datasets: [
        {
          data: sales,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
        }],
    };


    return(
          <Card>
            <CardHeader>
              Pie Chart
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Pie data={pie} />
              </div>
            </CardBody>
          </Card>
      )
  }
} 