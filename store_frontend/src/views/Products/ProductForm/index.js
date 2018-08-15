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
import { connect } from 'react-redux';
import {fetchProducts, createProduct,updateProduct,fetchProduct} from '../../../actions/actionProducts'
import history from '../../../history';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: {
        name: '',
        price: '',
        margin: '',
        total_sales: ''
      }
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    const {productId,fromCreate} = this.props
    !fromCreate ? this.props.fetchProduct(productId) : ''
  }


  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    let {productData} = this.state
    productData[name] = value
    this.setState({productData: productData})
  }

  handleSubmit(e){
    e.preventDefault()
    const {productData} = this.state
    const {fromCreate} = this.props
    if(fromCreate){
     this.props.createProduct(productData)
    }
    else{
      let data = productData
      data.id = this.props.match.params.id
      this.props.updateProduct(productData)
    }
  }


 
  render() {
    const {productData} = this.state
    const {fromCreate} = this.props
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm={{ size: 6, order: 2, offset: 3 }}>
            <Form onSubmit={this.handleSubmit}>
            <Card>
              <CardHeader>
                <strong>{fromCreate ? 'Create': 'Update'}</strong>
                <small> Product</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="name">Product Name</Label>
                  <Input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Enter product name"
                    defaultValue ={productData.name}
                    onChange={this.handleChange}
                    required
                     />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="price">Product Price($)</Label>
                  <Input 
                    type="number" 
                    id="price" 
                    name="price"
                    placeholder="Enter product price"
                    defaultValue ={productData.price}
                    onChange={this.handleChange}
                    required
                    />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">Product Margin(%)</Label>
                  <Input 
                  type="number" 
                  id="margin"
                  name="margin"  
                  defaultValue ={productData.margin}
                  onChange={this.handleChange}
                  required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">Product Units Sold</Label>
                  <Input 
                    type="number"
                    id="total_sales"
                    name="total_sales"
                    placeholder="Enter total units sold"
                    defaultValue ={productData.total_sales}
                    onChange={this.handleChange}
                    required
                     />
                </FormGroup>                
              </CardBody>   
              <Button type="submit">{fromCreate ? 'Create': 'Update'} </Button>           
            </Card>            
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    products: state.product.products || [],
    getProduct: state.product.getProduct || null
  };
}

export default connect(
  mapStateToProps,
  { fetchProduct,createProduct,updateProduct,fetchProducts}
)(ProductForm);
