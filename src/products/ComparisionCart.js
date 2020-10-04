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
       return (<div className="cart">
            <div style={{margin:"auto",width:"50%"}}>
        { this.props.cart.prod1!=null && 
            <div className="cart-entry">
            <input className="remove-image" type="image" src={"productImages/cross.png"}
            onClick={()=>this.props.removeItem(this.props.cart.prod1)}/>
            <img className="cart-image" src={"productImages/"+this.props.cart.prod1.img}/>
            
            <h6 style={{height:height+"px"}}>{this.props.cart.prod1.name}</h6>
            </div>
            }
        { this.props.cart.prod2!=null && 
            <div className="cart-entry">
             <input className="remove-image" type="image" src={"productImages/cross.png"}
             onClick={()=>this.props.removeItem(this.props.cart.prod2)}/>
            <img className="cart-image" src={"productImages/"+this.props.cart.prod2.img}/>
            
            <h6 style={{height:height+"px"}}>{this.props.cart.prod2.name}</h6>
          
            </div> }
            <input className="refresh-image" type="image" src={"productImages/refresh.png"}
            onClick={()=>this.props.refresh()}/>

            { this.props.cart.prod1 && this.props.cart.prod2 &&
             <Link to={{pathname:"/compare",
                    state:{prod1:{img:this.props.cart.prod1.img,genre:
                    this.props.cart.prod1.genre,copies_sold:this.props.cart.prod1.copies_sold,
                    rating:this.props.cart.prod1.rating},prod2:{img:this.props.cart.prod2.img,genre:
                        this.props.cart.prod2.genre,copies_sold:this.props.cart.prod2.copies_sold,
                        rating:this.props.cart.prod2.rating}}}}>
                <img src={"productImages/compare.png"} className="compare-image"/>
            </Link>}
            </div>
            </div>);
        }
    }
    