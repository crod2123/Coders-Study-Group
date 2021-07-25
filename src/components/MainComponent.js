import React, { Component } from 'react';
import About from './AboutComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <div className="container main-container">
                    <div className="row">
                        <div className="col text-center">
                            This is a deployment demonstration of a simple React site using react-router.
                        </div>
                    </div>
                </div>
            );
        };

        return(
            <>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Redirect to='/' />
                </Switch>
            </>
        );
    }
}

export default Main;