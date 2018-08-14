import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import Widget01 from './Widget01';

class Widgets extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="success" header="89.9%" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="info" header="12.124" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="warning" header="$98.111,00" smallText="">
              <small className="text-muted">Excepteur sint occaecat...</small>
            </Widget01>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="danger" value="95" header="1.9 TB" mainText="Danger!"
                      smallText="This is your final warning..." />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="primary" variant="inverse" header="89.9%" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="warning" variant="inverse" header="12.124" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="danger" variant="inverse" header="$98.111,00" smallText="">
              <small className="text-muted">Excepteur sint occaecat...</small>
            </Widget01>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget01 color="info" variant="inverse" value="95" header="1.9 TB" mainText="Danger!"
                      smallText="This is your final warning..." />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Widgets;
