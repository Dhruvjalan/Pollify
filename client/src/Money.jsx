import React, { Component } from 'react';
import LineChart from './LineChart';
import ExpenditureChart from './ExpenditureChart';
import Counter from './counter';
import Stocks from './stocks';

class Money extends Component {

    render() {
        return (
            <div style={{margin:'0 2rem'}}>
                <h3 style={{justifySelf:'left',background:'white'}}>Money</h3>
                <div className='money container d-flex flex-nowrap justify-content-evenly'>
                    <div className='d-flex flex-wrap flex-column flex-center justify-content-center'>
                    <Stocks />
                        <Counter n='700' pre='₹' post=' Spent this month' />
                    </div>
                <LineChart />
                <ExpenditureChart name='Ananya' title='Expenditure' cutout='30%'/>

                </div>
            </div>
        );
    }
}

export default Money;