import React,{Component} from 'react'
import ProductForm from '../ProductForm'


export default class CreateProduct extends Component {
	render(){
		return(<ProductForm fromCreate={true} />)
	}
}