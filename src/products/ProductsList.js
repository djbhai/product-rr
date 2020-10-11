import React from 'react';
import { withRouter,Router,Route } from 'react-router-dom';
import { LoginPage } from '../login';
import { history } from '../_helpers';
import { Product, Cart } from '../products';
import { productsService } from '../_services';


class ProductsList extends React.Component{
constructor(props){
    super(props);
    this.state={
        products:[],
        cart:{
           
        }
        };
    setTimeout(()=>{
        productsService.getProducts().then((value)=>{
            let nameSizes=[];
            value.forEach(element => {
                nameSizes.push(element.name.length)
            });
            let maxSize= Math.max(...nameSizes);
            this.setState({
                products: value,
                cart:{
                  
                },
                maxSize: maxSize
            })
        });
    });

    this.refreshCart = this.refreshCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.compare = this.compare.bind(this);
}



refreshCart(){
    this.setState((state)=>{
        return{
        ...state.products,
        ...state.maxSize,
        cart:{

        }
        }
    })
}// remove all products from the cart.

removeItem(product){
    this.setState((state)=>{
         delete state.cart[product.id];
         return{
            state
        }
    });
}// remove product from the cart.

compare(product){
    if(product.id in this.state.cart){
        return;
    }// don't add if the item is already in the cart
    if(Object.keys(this.state.cart).length==2){
        return;
    } // don't add items if the cart already contains 2 items
    else{
        this.setState((state)=>{
            return{
                ...state.products,
                ...state.maxSize,
                cart:{
                    ...state.cart,
                    [product.id]: product
                }
            }
        })
    }// otherwise add item if product to the cart using the product id as the key.
}


render(){
    const products= this.state.products;
    const cart = this.state.cart;
    let cartHasItem= false;
    const cartSize= Object.keys(cart).length;
    let  cartFull = false;
    if(cartSize>0){
        cartHasItem=true;
        if(cartSize==2){
            cartFull=true;
        }
    }
    
    return (
        <div>
        { cartHasItem && <Cart cart={this.state.cart} removeItem={this.removeItem} 
        maxSize={this.state.maxSize} refresh={this.refreshCart}/>}
            <div id="products_list">
                { !products.length==0 && products.map((value)=>{
               return (<Product key={value.id} id={value.id} 
                                img={value.name.replaceAll(" ","_")+".jpg"} 
                                name={ value.name}
                                cost={value.price} artist={value.artist} 
                                genre={value.genre} rating={value.rating}
                                copies_sold={value.copies_sold}
                                compare={this.compare}
                                disable={cart.hasOwnProperty(value.id) || cartFull}
                                itemPresent={cart.hasOwnProperty(value.id)}
                                cartFull={cartFull}/>)})}
            </div>
        </div>
    );
}
}

const routedComponent = withRouter(ProductsList);
export {routedComponent as ProductsList}