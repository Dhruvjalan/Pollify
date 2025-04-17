import React, { Component } from 'react';
import BarChart from './BarChart';
import ExpenditureChart from './ExpenditureChart';
import Counter from './counter';

function Habits ({name,data}) {

    console.log("habit data",data)
  
        return (
            <div style={{marginLeft:'2rem'}}>
                <h3 style={{justifySelf:'left',background:'white'}}>Habits</h3>
                <h5 style={{justifySelf:'center'}}>Screen Time This Week</h5>
                <div className='habitscontainer'>
                    <div className='d-flex flex-wrap flex-column flex-center justify-content-center'>
                        <ExpenditureChart name={name} title='Screen Time Division' piedata={data.Screentime_Split}/>
                        <Counter n={data.Screentime_Min} pre='' post='mins'/>
                    </div>
                <BarChart bardata={data.Screentime_Day} />
                </div>
            </div>
        );
    }

export default Habits;