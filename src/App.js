// @flow
import React, {Component} from 'react';
import './App.css';
import Competitions from "./components/pages/competitions";
import store from './store/'
import {fetchCompetitions} from "./actions/competitions";

type Props = {};

class App extends Component<Props> {

    componentDidMount() {
        store.dispatch(fetchCompetitions())
    }

    render() {
        return (
            <Competitions/>
        );
    }
}

export default App;
