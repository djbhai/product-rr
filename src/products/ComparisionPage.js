import React from 'react';
import { withRouter } from 'react-router-dom';
import './compare-style.css';

class Compare extends React.Component{

    constructor(props){
        super();
    }

    render(){
        return(<table>
            <tr>
                <td> </td>
                <td> <img src={"productImages/"+ this.props.location.state.prod1.img }/> </td>
                <td> <img src={"productImages/"+this.props.location.state.prod2.img}/> </td>
            </tr>
            <tr className="text-rows">
                <td className="row-heading"> Genre</td>
                <td> {this.props.location.state.prod1.genre}</td>
                <td> {this.props.location.state.prod2.genre}</td>
            </tr>
            <tr className="text-rows">
                <td className="row-heading"> Copies sold</td>
                <td> {this.props.location.state.prod1.copies_sold}</td>
                <td> {this.props.location.state.prod2.copies_sold}</td>
            </tr>
            <tr className="text-rows">
                <td className="row-heading"> Rating</td>
                <td> {this.props.location.state.prod1.rating}</td>
                <td> {this.props.location.state.prod2.rating}</td>
            </tr>
        </table>)
    }
}

const routerPage = withRouter(Compare);
export { routerPage as Compare };