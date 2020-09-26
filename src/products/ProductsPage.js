import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../_routes';
import { history } from '../_helpers';
import { productsService } from '../_services';
import { ProductsList, ProductDetails } from '../products';
import { alertActions } from '../_actions';
import { asyncComponent } from '../_helpers';


export class ProductsPage extends React.Component{
    constructor(props){
       
        super();
        this.state={
            products: []
        }
    }

    componentWillMount(){
        console.log("product page");
        setTimeout(()=>{
            productsService.getProducts().then((value)=>{
                this.setState({
                    products: value
                })
            });
        });
    }

    render(){
        const products = this.state.products;

        return ( 
        <div>
        { this.state.products.length==0? false : true &&
        <Router history={history}>
            <Route path="/" render={(props)=>(
                <ProductsList {...props} data={this.state.products}/>
            )
            }/>
            <Route path="/product:id" component={ProductDetails}/>
        </Router>}
        </div>
        );
    }
        

}

/*
render={() => (
    <ProductsList data={ this.state.products }/>
    )}*/
/*<Switch>
            <PrivateRoute path="/" 
            data={this.state.products} component={ ProductsList }  />
        </Switch>*/
