import React, { Component } from 'react';
import ScreentimeChart from './BarChart';
import ExpenditureChart from './ExpenditureChart';
import Counter from './counter';

class Habits extends Component {

    render() {
        return (
            <div style={{marginLeft:'2rem'}}>
                <h3 style={{justifySelf:'left',background:'white'}}>Habits</h3>
                <h5 style={{justifySelf:'center'}}>Screen Time This Week</h5>
                <div className='habitscontainer'>
                    <div className='d-flex flex-wrap flex-column flex-center justify-content-center'>
                        <ExpenditureChart name='Ananya' title='Screen Time Division'/>
                        <Counter n='700' pre='' post='mins'/>
                    </div>
                <ScreentimeChart />
                </div>
            </div>
        );
    }
}

export default Habits;