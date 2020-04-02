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
import 'react-notifications/lib/notifications.css';
import {NotificationManager,NotificationContainer} from 'react-notifications';

import { Field, reduxForm } from 'redux-form';

class ProductForm2 extends Component {
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
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount(){
    const {productId,fromCreate} = this.props
    !fromCreate ? this.props.fetchProduct(productId).then(
      () => this.updateState()
      ) : ''
  }

  updateState(){
    const {getProduct} = this.props
    let productData ={
        name: getProduct.name,
        price: getProduct.price,
        margin: getProduct.margin,
        total_sales: getProduct.total_sales
    } 

    this.setState({productData: productData})
  }


  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    let {productData} = this.state
    productData[name] = value
    this.setState({productData: productData})
  }



  handleSubmit(data) {
     console.log('Submission received!', data);

     let productData = data

     const {fromCreate,productId} = this.props
    if(fromCreate){
     this.props.createProduct(productData).then(
      () => NotificationManager.success('Product Create Success')).
      catch(() => () => NotificationManager.error('Product Create Error'))  
    }
    else{
      let data = productData
      data.id =  productId
      this.props.updateProduct(productData).then(() => 
        NotificationManager.success('Product Update Success')).
      catch(() => () => NotificationManager.error('Product Update Error'))
    }
  }


 
  render() {
    const {productData} = this.state
    const { handleSubmit, pristine, reset, submitting,fromCreate } = this.props;
    

    return (
      <div className="animated fadeIn">
                <NotificationContainer />
        <Row>
          <Col xs="12" sm={{ size: 6, order: 2, offset: 3 }}>
      <form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>
              <div>
                <label>First Name</label>
                <div>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Product Name"
                  />
                </div>
              </div>
             
              <div>
                <label>Price</label>
                <div>
                  <Field
                    name="price"
                    component="input"
                    type="number"
                    placeholder="Price"
                  />
                </div>
              </div>

              <div>
                <label>Margin</label>
                <div>
                  <Field
                    name="margin"
                    component="input"
                    type="number"
                    placeholder="Margin"
                  />
                </div>
              </div>

               <div>
                <label>Total Sales</label>
                <div>
                  <Field
                    name="total_sales"
                    component="input"
                    type="number"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              

              <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                  Clear Values
                </button>
              </div>
            </form>
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

const ProductFormWithReduxForm = reduxForm({
  form: 'createProduct', // a unique identifier for this form
})(ProductForm2);


export default connect(
  mapStateToProps,
  { fetchProduct,createProduct,updateProduct,fetchProducts}
)(ProductFormWithReduxForm);
