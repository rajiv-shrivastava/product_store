import React, { Component } from 'react';
import { CardGroup, Col, Row,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { fetchProducts,addSales,deleteProduct} from '../../actions/actionProducts';
import { connect } from 'react-redux';

 class Products extends Component {

  componentDidMount(){
  	this.props.fetchProducts()
  }

  renderProducts = () => {
  	const {products} = this.props
  	const columns = [{
		    Header: 'Product Name',
		    accessor: 'name' 
		  },
		  {
		    Header: 'Product Price',
		    accessor: 'price' 
		  },
		  {
		    Header: 'Profit Margin',
		    accessor: 'margin' 
		  },
		  {
		    Header: 'Total Units Sold',
		    accessor: 'total_sales' 
		  },
		  {
       Header: 'Actions',
       Cell: row => (
           <div>
               <Link 
                to={'#'}
                onClick={() => this.handleDelete(row.original.id)}
                >
                <i className="fa fa-trash"> </i>
                </Link> &nbsp;&nbsp;&nbsp;
                
                <Link to={{
                  pathname: `/products/updateproduct/${row.original.id}`,
                  state: { id: row.original.id }
                 }}
                >
                <i className="fa fa-pencil"> </i>
                </Link>&nbsp;&nbsp;&nbsp;

               <Button
                onClick={() => this.handleSales(row.original.id)} 
                >
                <i className="fa fa-plus"> </i>
               </Button> &nbsp;               
           </div>
       )
    }]
		return(<ReactTable 
			  className="text-center"
			  data={products}
			  defaultPageSize={4}
			  columns={columns}
		  />)
  }

  handleDelete = (id) => {
     this.props.deleteProduct(id).then(
      () => this.props.fetchProducts())
  }

  handleSales = (id) => {
    this.props.addSales(id).then(
      () => this.props.fetchProducts())
  }


  render() {
  	const {products} = this.props
    return (
      <div className="animated fadeIn">
            <div className="text-right"> 
            <Link to={'/products/createproduct'}>                
            <Button>
             <i className="fa fa-plus"> </i> 
                Add New 
             </Button>
            </Link>
             &nbsp;&nbsp;

            <Link to={'/products/createproductwithreduxform'}>                
            <Button>
             <i className="fa fa-plus"> </i> 
                Add New With Redux Form
             </Button>
            </Link>
            </div>

        {products.length > 0 ? this.renderProducts() : ''}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    products: state.product.products || []
  }
}

export default connect(
  mapStateToProps,
  { addSales,deleteProduct,fetchProducts}
)(Products);
