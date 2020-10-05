import {authenticationService} from '../_services';
import React from 'react';
import {Link} from 'react-router-dom';
import './head.css';

export function addHeader(ProductComponent){
    return class extends React.Component{

        logout(){
            authenticationService.logout();
        }
        render(){
            return (
            <div>
            <div className="head-style">
            <Link to="/login" onClick={this.logout}  
            >
            <img className="head-images" src="productImages/logout.png"/>
            </Link>
            <Link to="/product"> 
            <img className="head-images" src="productImages/home.png"/>
            </Link>
            </div>
            <div className="products-style">
            <ProductComponent  {...this.props}/>
            </div>
            </div>)
        }
    }
}