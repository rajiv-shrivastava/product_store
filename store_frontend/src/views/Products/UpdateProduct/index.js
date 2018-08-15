import React,{Component} from 'react'
import ProductForm from '../ProductForm'

export default class UpdateProduct extends Component {
	render(){
		return(<ProductForm 
			  fromCreate={false}
			  productId={this.props.match.params.id}
			 />)
	}
}