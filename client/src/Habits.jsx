import React, { Component } from 'react';
import ScreentimeChart from './ScreentimeChart';
import ExpenditureChart from './ExpenditureChart';

class Habits extends Component {
    render() {
        return (
            <div>
                <h1>Habits Dashboard</h1>
                <ScreentimeChart />
                <ExpenditureChart />
            </div>
        );
    }
}

export default Habits;