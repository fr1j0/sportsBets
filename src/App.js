// @flow
import React, {Component} from 'react';
import store from './store';
import Competitions from "./components/pages/competitions";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/molecules/header";
import SideDrawer from "./components/organisms/sideDrawer";

type Props = {};

class App extends Component<Props> {

    render() {
        return (
            <Provider store={store}>
                <Header/>
                <Router>
                    <Route path="/" component={Competitions}/>
                </Router>
                <SideDrawer/>
            </Provider>
        );
    }
}

export default App;
