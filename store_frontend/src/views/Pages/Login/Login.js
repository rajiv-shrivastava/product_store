import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { getToken} from '../../../actions/actionAuth';
import { connect } from 'react-redux';


class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      auth: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleSubmit(e){
    e.preventDefault()
    this.props.getToken(this.state)
  }

    handleChange(e) {
      let name = e.target.name
      let value = e.target.value
      let auth = this.state
      auth[name] = value
      this.setState({auth})
    }

    render() {
      return (
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input 
                           type="text" 
                           placeholder="Username"
                           name="email"
                           onChange={this.handleChange} 
                           />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input 
                             type="password" 
                             name="password"
                             placeholder="Password"
                             onChange={this.handleChange} 
                            />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button 
                              type="submit" 
                              color="primary" 
                              className="px-4">
                              Login
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                    <CardBody className="text-center">
                      <div>
                        <h2>Store Manager</h2>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
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
  { getToken}
)(Login);
