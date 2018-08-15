import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: {
        productName: '',
        productPrice: '',
        productMargin: '',
        totalSold: ''
      }
    };
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    let {productData} = this.state
    productData[name] = value
    this.setState({productData: productData})
  }
 

  render() {
    const {productData} = this.state
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm={{ size: 6, order: 2, offset: 3 }}>
            <Form>
            <Card>
              <CardHeader>
                <strong>Create</strong>
                <small> Product</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="productName">Product Name</Label>
                  <Input 
                    type="text" 
                    id="productName"
                    name="productName" 
                    placeholder="Enter product name"
                    defaultValue ={productData.productName}
                    onChange={this.handleChange}
                    required
                     />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="productPrice">Product Price</Label>
                  <Input 
                    type="text" 
                    id="productPrice" 
                    name="productPrice"
                    placeholder="Enter product price"
                    defaultValue ={productData.productPrice}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">Product Margin(%)</Label>
                  <Input 
                  type="text" 
                  id="productMargin" 
                  placeholder="Enter product profit margin" 
                  defaultValue ={productData.productMargin}
                  onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">Product Units Sold</Label>
                  <Input 
                    type="text"
                    id="totalSold"
                    placeholder="Enter total units sold"
                    defaultValue ={productData.totalSold}
                    onChange={this.handleChange}
                     />
                </FormGroup>                
              </CardBody>   
              <Button type="submit"> Create </Button>           
            </Card>            
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}


