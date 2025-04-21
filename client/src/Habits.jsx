import React, { Component } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Counter from './counter';

function Habits ({name,data,theme}) {

    // console.log("habit data",data)
  
        return (
            <div style={{margin:'0 10rem'}}>
                <h1 style={{justifySelf:'left'}}>Habits</h1>
                <div className='habitscontainer'>
                    <div className='d-flex flex-wrap flex-column flex-center justify-content-center'>
                        <PieChart name={name} title='Screen Time Division' piedata={data.Screentime_Split} theme={theme}/>
                        <Counter n={data.Screentime_Min} pre='' post='mins'/>
                    </div>
                <BarChart bardata={data.Screentime_Day} title={'Screentime This Week'} theme={theme} />
                </div>
            </div>
        );
    }

export default Habits;