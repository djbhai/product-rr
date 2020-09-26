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
                    <Link to={{pathname:"/login"/*productDetails.id*/
                     /*state:{product:productDetails}*/}}> <h3> {this.props.name}</h3> </Link>
                    <p>{this.props.artist}</p>
                    <p>{this.props.cost}</p>
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