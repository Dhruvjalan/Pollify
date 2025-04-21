import React, { Component } from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';
import Counter from './counter';
import Stocks from './stocks';

function Money({name,data,theme}) {
    // console.log("money data",data)
        return (
            <div style={{margin:'0 10rem'}}>
                <h1 style={{justifySelf:'left'}}>Money</h1>
                <div className='money container d-flex flex-wrap flex-md-nowrap flex-justify-content-evenly'>
                    <div className='d-flex flex-wrap flex-column flex-center justify-content-center'>
                    <Stocks stockData={data.stocks} theme={theme}/>
                        <Counter n={4*data.expenditure_day.reduce((acc, val) => acc + val, 0)} pre='₹' post=' Spent this month' />
                    </div>
                <LineChart linedata={data.expenditure_day} limit={data.Weekly_limit} title='Expenditure This Week' theme={theme}/>
                <PieChart name={name} title='Expenditure This Week' cutout='30%' piedata={data.Expenditure_Split} theme={theme}/>

                </div>
            </div>
        );
    
}

export default Money;