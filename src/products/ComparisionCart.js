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
        let prod1 = this.props.cart.prod1;
        let prod2 = this.props.cart.prod2;
       return (<div className="cart">
            <div style={{margin:"auto",width:"50%"}}>
        { prod1!=null && 
            <div className="cart-entry">
            <input className="remove-image" type="image" src={"productImages/cross.png"}
            onClick={()=>this.props.removeItem(prod1)}/>
            <img className="cart-image" src={"productImages/"+prod1.img}/>
            
            <h6 style={{height:height+"px"}}>{prod1.name}</h6>
            </div>
            }
        { prod2!=null && 
            <div className="cart-entry">
             <input className="remove-image" type="image" src={"productImages/cross.png"}
             onClick={()=>this.props.removeItem(prod2)}/>
            <img className="cart-image" src={"productImages/"+prod2.img}/>
            
            <h6 style={{height:height+"px"}}>{prod2.name}</h6>
          
            </div> }
            <input className="refresh-image" type="image" src={"productImages/refresh.png"}
            onClick={()=>this.props.refresh()}/>

            { prod1 && prod2 &&
             <Link to={{pathname:"/compare",
                    state:{prod1:{img:prod1.img,genre:
                    this.props.cart.prod1.genre,copies_sold:prod1.copies_sold,
                    rating:prod1.rating,
                    cost:prod1.cost},prod2:{img:prod2.img,genre:
                        prod2.genre,copies_sold:prod2.copies_sold,
                        rating:prod2.rating,
                        cost:prod2.cost}}}}>
                <img src={"productImages/compare.png"} className="compare-image"/>
            </Link>}
            </div>
            </div>);
        }
    }
    