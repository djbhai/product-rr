import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_routes';
import { ProductsList, ProductDetails, Compare } from '../products';
import { LoginPage } from '../login';
import { RegisterPage } from '../register';
import { addHeader } from '../_header';
import './app.css';

class App extends React.Component {
    constructor(props) {
        console.log(localStorage.getItem("user"));
        super();

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

   

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron custom-jumbotron" style={{backgroundColor:"white"}}>
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                           <Switch>
                                <PrivateRoute exact  path="/" component={addHeader(ProductsList)} />
                                <Route  path="/login" component={LoginPage}/>
                                <Route  path="/register" component={RegisterPage} />
                                <PrivateRoute path="/product:id" component={addHeader(ProductDetails)}/>
                                <PrivateRoute path="/compare" component={addHeader(Compare)}/>
                                <Redirect from="*" to="/"/>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };