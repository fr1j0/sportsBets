// @flow
import React, {Component} from 'react';
import './App.css';
import store from './store';
import Competitions from "./components/pages/competitions";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

type Props = {};

class App extends Component<Props> {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/" component={Competitions}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
