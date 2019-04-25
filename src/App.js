// @flow
import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Competitions from "./components/pages/competitions";
import SideDrawer from "./components/organisms/sideDrawer";
import Header from "./components/molecules/header";

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
