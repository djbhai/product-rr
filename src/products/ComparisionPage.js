import React from 'react';
import { withRouter } from 'react-router-dom';
import './compare-style.css';

class Compare extends React.Component{

    constructor(props){
        super();
    }

    render(){
        let prod1 = this.props.location.state.prod1;
        let prod2 = this.props.location.state.prod2;
        return(<table>
            <tr>
                <td> </td>
                <td> <img src={"productImages/"+ prod1.img }/> </td>
                <td> <img src={"productImages/"+prod2.img}/> </td>
            </tr>
            <tr className="text-rows">
                <td className="row-heading"> Genre</td>
                <td> {prod1.genre}</td>
                <td> {prod2.genre}</td>
            </tr>
            <tr className="text-rows">
                <td className="row-heading"> Copies sold</td>
                <td> {prod1.copies_sold}</td>
                <td> {prod2.copies_sold}</td>
            </tr>
            <tr className="text-rows">
                <td className="row-heading"> Rating</td>
                <td> {prod1.rating}</td>
                <td> {prod2.rating}</td>
            </tr>
            <tr className="text-rows">
                <td className="row-heading"> Cost</td>
                <td> {prod1.cost}</td>
                <td> {prod2.cost}</td>
            </tr>
        </table>)
    }
}

const routerPage = withRouter(Compare);
export { routerPage as Compare };