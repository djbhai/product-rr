import React from 'react';
import './cart-style.css';

export class Cart extends React.Component{
 
    constructor(props){
        super();
    }

    render(){
        /*const bothProducts = this.props.prod1!=null && this.props.prod2!=null?
        true: false;
        const atleastOne = this.props.prod1!=null || this.props.prod2!=null;
        if(atleastOne){*/
        let maxSize = this.props.maxSize;
        let height = ((maxSize/6)*15) + 50; //((maxSize%6>0 && maxSize>6)?15:0)
       return (<div className="cart">
            <div style={{margin:"auto",width:"50%"}}>
        { this.props.cart.prod1!=null && 
            <div className="cart-entry">
            <input className="remove-image" type="image" src={"productImages/cross.png"}
            onClick={()=>this.props.removeItem(this.props.cart.prod1)}/>
            <img className="cart-image" src={"productImages/"+this.props.cart.prod1.img}/>
            
            <h6 style={{height:height+"px"}}>{this.props.cart.prod1.name}</h6>
            {/*<button className="btn btn-danger cart-button" onClick={()=>this.props.removeItem(this.props.cart.prod1)}>
                Remove 
        </button>*/}
            </div>
            }
        { this.props.cart.prod2!=null && 
            <div className="cart-entry">
             <input className="remove-image" type="image" src={"productImages/cross.png"}
             onClick={()=>this.props.removeItem(this.props.cart.prod2)}/>
            <img className="cart-image" src={"productImages/"+this.props.cart.prod2.img}/>
            
            <h6 style={{height:height+"px"}}>{this.props.cart.prod2.name}</h6>
          
           { /*<button className="btn btn-danger cart-button" onClick={()=>this.props.removeItem(this.props.cart.prod2)}>
                Remove
        </button>*/}
            </div> }
            <input className="refresh-image" type="image" src={"productImages/refresh.png"}
            onClick={()=>this.props.refresh()}/>
            <input className="compare-image" type="image" src={"productImages/compare.png"}
            onClick={()=>"b"}/>
            {/*<button className="cart-button2 refresh-image" onClick={()=>this.props.refresh()}>
            </button>*/}
            {/*<button className="cart-button2 compare-image" onClick={()=>"b"}></button>*/}
            </div>
            </div>);
        }
    }
    