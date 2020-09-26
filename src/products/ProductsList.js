import React from 'react';
import { withRouter,Router,Route } from 'react-router-dom';
import { LoginPage } from '../login';
import { history } from '../_helpers';
import { Product } from '../products';
import { productsService } from '../_services';


class ProductsList extends React.Component{
constructor(props){
    super(props);
    this.state={
        products:[]
    }
    setTimeout(()=>{
        productsService.getProducts().then((value)=>{
            this.setState({
                products: value
            })
        });
    });
   
}



render(){
    const products= this.state.products;

    return (
        <div id="products_list">
           { !products.length==0 && products.map((value)=>{
               return (<Product key={value.id} id={value.id} 
               img={value.name.replaceAll(" ","_")+".jpg"} 
               name={ value.name}
               cost={value.price} artist={value.artist}/>
               )
            })}
        </div>

    );
}
}

const routedComponent = withRouter(ProductsList);
export {routedComponent as ProductsList}