import React, { Component } from 'react';
import { fetchProducts} from '../../actions/actionProducts';
import { connect } from 'react-redux';
import {
  Card,CardBody,CardFooter,CardHeader,CardTitle,Col,
  Row,Table,CardColumns
} from 'reactstrap';
import LineChart from './Charts/LineChart'
import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'

class Dashboard extends Component {

  componentDidMount() {    
    this.props.fetchProducts()   
  }

  returnBoxes = (products) => {
    let boxes = products.map((prod,i) =>
      <Col key={i} xs="12" sm="6" lg="3">
            <Card 
              className={`text-white ${i% 2 == 0 ? 'bg-danger' : i% 3 == 0 ? 
                   'bg-info' : 'bg-warning'}`}>
              <CardBody className="pb-0">
                <div className="text-value">{prod.name}</div>
                <div>Total Sold: {prod.total_Sales} </div>
                <div>Current Price: {prod.price}</div>
              </CardBody>
            </Card>
      </Col>
      )
    return boxes
  }

  render() {

    const {products} = this.props
    return (
      <div className="animated fadeIn">
        <Row>
         {products.length > 0 ? 
           this.returnBoxes(products): ''}
        </Row>
        {products.length > 0 ?
          <div>
          <Row> 
            <Col sm="10">  
               <LineChart products={products}/> : ''} 
            </Col> 
          </Row>
          <Row> 
           <Col sm="10">
             <BarChart products={products}/>
            </Col>
          </Row>
          <Row>
            <Col sm="10">
             <PieChart products={products}/>
            </Col>  
          </Row>
          </div> 
          : 
          'Loading....'
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products || []
  };
}

export default connect(
  mapStateToProps,
  {fetchProducts}
)(Dashboard);
