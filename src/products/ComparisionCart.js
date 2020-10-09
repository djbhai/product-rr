import React from 'react';
import { Link } from 'react-router-dom';
import './cart-style.css';

export class Cart extends React.Component{
 
    constructor(props){
        super();
    }

    render(){
        
        let maxSize = this.props.maxSize;
        let height = ((maxSize/6)*15) + 50; 
        let prods =[];
        for(const prod in this.props.cart){
            prods.push(this.props.cart[prod]);
        }
       
       return (<div className="cart">
            <div style={{margin:"auto",width:"50%"}}>
               { prods.map(product=>{
                   return(
                    <div className="cart-entry">
                        <input className="remove-image" type="image" src={"productImages/cross.png"}
                        onClick={()=>this.props.removeItem(product)}/>
                        <img className="cart-image" src={"productImages/"+product.img}/>
                        <h6 style={{height:height+"px"}}>{product.name}</h6>
                    </div>)})}
        
        
            <input className="refresh-image" type="image" src={"productImages/refresh.png"}
            onClick={()=>this.props.refresh()}/>

            { prods.length==2 &&
             <Link to={{pathname:"/compare",
                    state:{
                            prod1:{
                                    img:prods[0].img,
                                    genre:prods[0].genre,
                                    copies_sold:prods[0].copies_sold,
                                    rating:prods[0].rating,
                                    cost:prods[0].cost},
                            prod2:{
                                    img:prods[1].img,
                                    genre:prods[1].genre,
                                    copies_sold:prods[1].copies_sold,
                                    rating:prods[1].rating,
                                    cost:prods[1].cost}}}}>
                <img src={"productImages/compare.png"} className="compare-image"/>
            </Link>}
            </div>
            </div>);
        }
    }
    