import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import CompetitionsTemplate from "../templates/competitions";
import store from "../../store";
import {fetchCompetitions} from "../../actions/competitions";

class Competitions extends Component {
    componentDidMount(): void {
        store.dispatch(fetchCompetitions())
    }

    render() {
        return <div>
            <CompetitionsTemplate competitions={this.props.competitions}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        competitions: state.competitions
    }
}

export default connect(mapStateToProps)(Competitions)