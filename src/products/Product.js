import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './list-product.css';

class Product extends React.Component{
    constructor(props){
        super(props);
    }
  
    render(){
        const showDetails=('details' in this.props);
        const productDetails= this.props;
        return (
            <div>
                <div className={showDetails?"product-container-details":
                "product-container"}>
                <img className={showDetails?"product-image-details":
                "product-image"} src={"productImages/"+this.props.img}/> <br/>
                <div className={showDetails?"product-text-details":"product-text"}>
                    <Link to={{pathname:"/product:"+productDetails.id,
                    state:{product:{id:productDetails.id,name:productDetails.name,
                    cost:productDetails.cost,artist:productDetails.artist}}}
                }> <h3> {this.props.name}</h3> </Link>
                    <p>{this.props.artist}</p>
                    <p>{this.props.cost}</p>

                    {showDetails && <div><p className="product-details"> {this.props.details} </p></div>}
                   { !showDetails && <button className="btn  compare-button" 
                   onClick={()=>this.props.compare(this.props)} >Compare</button>}
                   
                   </div>
                
                </div>
                <div className={showDetails?"product-border":"product-border-details"}> 
                </div>
            </div>
        );
    }
}

const  routerProduct = withRouter(Product);
export { routerProduct as Product}