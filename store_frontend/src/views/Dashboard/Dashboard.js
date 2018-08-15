import React, { Component } from 'react';
import {
  Card,CardBody,CardFooter,CardHeader,CardTitle,Col,
  Row,Table,
} from 'reactstrap';
import { fetchProducts} from '../../actions/actionProducts';
import { getToken} from '../../actions/actionAuth';

import { connect } from 'react-redux';


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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.graphs.all || []
  };
}

export default connect(
  mapStateToProps,
  { getToken,fetchProducts}
)(Dashboard);
