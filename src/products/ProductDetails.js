import React from 'react';
import { withRouter } from 'react-router-dom';
import {Product} from '../products';
import {productsService} from '../_services';

class ProductDetails extends React.Component{

    constructor(props){
        super(props);
        const {id} = this.props.location.state.product;
        this.state={
            details:null
        };
        setTimeout(()=>{
            productsService.getProductDetails(id).then((value)=>{
                this.setState({
                    details:value
                })
            })
        })
    }

    render(){
        console.log("Here");
        console.log(this.props.location);
        const {product} =this.props.location.state;
        return(
            <Product id={product.id} 
            img={product.name.replaceAll(" ","_")+".jpg"} 
            name={ product.name}
            cost={product.cost} artist={product.artist}
            details={this.state.details}/>
        )
    }
}

const routedPage = withRouter(ProductDetails);

export {routedPage as ProductDetails};