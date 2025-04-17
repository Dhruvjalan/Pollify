import React, { Component } from 'react';
import LineChart from './LineChart';
import ExpenditureChart from './ExpenditureChart';
import Counter from './counter';
import Stocks from './stocks';

function Money({name,data}) {
    console.log("money data",data)
        return (
            <div style={{margin:'0 2rem'}}>
                <h3 style={{justifySelf:'left',background:'white'}}>Money</h3>
                <div className='money container d-flex flex-nowrap justify-content-evenly'>
                    <div className='d-flex flex-wrap flex-column flex-center justify-content-center'>
                    <Stocks stockData={data.stocks}/>
                        <Counter n={4*data.expenditure_day.reduce((acc, val) => acc + val, 0)} pre='₹' post=' Spent this month' />
                    </div>
                <LineChart linedata={data.expenditure_day}/>
                <ExpenditureChart name={name} title='Expenditure' cutout='30%' piedata={data.Expenditure_Split}/>

                </div>
            </div>
        );
    
}

export default Money;