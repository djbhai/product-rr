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
            prod1:null,
            prod2:null
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
                    prod1:null,
                    prod2:null
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
    this.setState((state)=>{return {
        ...state.products,
        ...state.maxSize,
        cart:{
            prod1:null,
            prod2:null
        }
    }});
}// refresh cart


removeItem(product){
    let prodNo;
    let inCart;
    prodNo= this.state.cart.prod1==product? 1: 2;
    if(prodNo==2){
        inCart =this.state.cart.prod1;
        this.setState((state)=>{return {
            ...state.products,
            ...state.maxSize,
            cart:{
                prod1:inCart,
                prod2:null
            }
        }})
    }
    else{
        inCart = this.state.cart.prod2;
        this.setState((state)=>{return {
            ...state.products,
            ...state.maxSize,
            cart:{
                prod1:null,
                prod2:inCart
            }
        }});
    }
}// remove item from cart

compare2(product){
    if(product.id in this.state.cart){
        return;
    }
    if(Object.keys(this.state.cart).length==2){
        return;
    }
    else{
        this.setState((state)=>{
            return{
                ...state.products,
                ...state.maxSize,
                cart:{
                    ...state.cart,
                    product
                }
            }
        })
    }
}

compare(product){
    let prod1 = this.state.cart.prod1;
    let prod2 = this.state.cart.prod2;

    if(prod1 !=null){
        if(product.id == prod1.id)
            return;
    }// check if product to be compared already exists.
    if(prod2 !=null){
        if(product.id == prod2.id)
            return;
    }
    if(prod1!=null && prod2!=null){
        return;
    }// if the comparision already contains two items return.
    else{
        
        if(prod1==null){
            this.setState((state)=>{
                return{
                    ...state.products,
                    ...state.maxSize,
                    cart:{
                        prod1:product,
                        prod2:state.cart.prod2
                    }
                }
            })
        }
      else if(prod2==null){
        this.setState((state)=>{
            return{
                ...state.products,
                ...state.maxSize,
                cart:{
                    prod1:state.cart.prod1,
                    prod2:product
                }
            }
        })
     }
    }// check for the product property that is null to add the product. 
}

render(){
    const products= this.state.products;
    let prod1= this.state.cart.prod1;
    let prod2= this.state.cart.prod2;

    return (
        <div>
        { (prod1||prod2) && <Cart cart={this.state.cart} removeItem={this.removeItem} 
        maxSize={this.state.maxSize} refresh={this.refreshCart}/>}
        <div id="products_list">
           { !products.length==0 && products.map((value)=>{
               return (<Product key={value.id} id={value.id} 
               img={value.name.replaceAll(" ","_")+".jpg"} 
               name={ value.name}
               cost={value.price} artist={value.artist} 
               genre={value.genre} rating={value.rating}
               copies_sold={value.copies_sold}
               compare={this.compare}/>
               )
            })}
        </div>
        </div>
    );
}
}

const routedComponent = withRouter(ProductsList);
export {routedComponent as ProductsList}