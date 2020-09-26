import React from 'react';
import { withRouter } from 'react-router-dom';
import {Product} from '../products';

class ProductDetails extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log("Here");
        console.log(this.props.location);
        const {product} =this.props.location.state;
        return(
            <Product id={product.id} 
            img={product.name.replaceAll(" ","_")+".jpg"} 
            name={ product.name}
            cost={product.price} artist={product.artist}/>
        )
    }
}

const routedPage = withRouter(ProductDetails);

export {routedPage as ProductDetails};