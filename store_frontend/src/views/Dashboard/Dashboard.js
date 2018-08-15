import React, { Component } from 'react';
import { fetchProducts} from '../../actions/actionProducts';
import { getToken} from '../../actions/actionAuth';
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
    const userData = {auth: {
      email: 'admin@mystore.com',
      password: 'adminpassword'
    }}
    this.props.getToken(userData).then(
      () => this.props.fetchProducts() 
      )
  }
  render() {
    const {products} = this.props
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
            </Card>
          </Col>
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
  { getToken,fetchProducts}
)(Dashboard);
