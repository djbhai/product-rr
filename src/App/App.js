import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_routes';
import { ProductsList, ProductDetails } from '../products';
import { LoginPage } from '../login';
import { RegisterPage } from '../register';

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
            <div className="jumbotron" style={{backgroundColor:"white"}}>
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                           <Switch>
                                <PrivateRoute exact  path="/" component={ProductsList} />
                                <Route  path="/login" component={LoginPage}/>
                                <Route  path="/register" component={RegisterPage} />
                                <PrivateRoute path="/product:" component={ProductDetails}/>
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