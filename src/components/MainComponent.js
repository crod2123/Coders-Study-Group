import React, { Component } from 'react';
import About from './AboutComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ButtonComponent from './ButtonComponent';

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <div className="container main-container">
                    <div className="row">
                        <div className="col text-center">
                            <ButtonComponent />
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