import React, {Component} from 'react';
import {connect} from 'react-redux'
import CompetitionsTemplate from "../templates/competitions";
import {fetchCompetitions, toggleSelection} from "../../actions/competitions";

class Competitions extends Component {
    toggleSelection(marketId, selectionId) {
        this.props.dispatch(toggleSelection(marketId, selectionId))
    }

    componentDidMount(): void {
        this.props.dispatch(fetchCompetitions())
    }

    render() {
        return <div>
            <CompetitionsTemplate
                competitions={this.props.competitions}
                selections={this.props.selections}
                toggleSelection={this.toggleSelection.bind(this)}
            />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        competitions: state.competitions,
        selections: state.selections,
    }
}

export default connect(mapStateToProps)(Competitions)