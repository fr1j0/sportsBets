import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import CompetitionsTemplate from "../templates/competitions";
import store from "../../store";
import {fetchCompetitions} from "../../actions/competitions";
import Header from "../molecules/header";

class Competitions extends Component {
    componentDidMount(): void {
        store.dispatch(fetchCompetitions())
    }

    render() {
        return <Fragment>
            <Header/>
            <CompetitionsTemplate competitions={this.props.competitions}/>
        </Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        competitions: state.competitions
    }
}

export default connect(mapStateToProps)(Competitions)