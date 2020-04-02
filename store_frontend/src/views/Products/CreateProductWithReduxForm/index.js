import React,{Component} from 'react'
import  ProductFormWithReduxForm from '../ProductFormWithReduxForm'


export default class CreateProductWithReduxForm extends Component {
  render(){
    return(<ProductFormWithReduxForm fromCreate={true} />)
  }
}