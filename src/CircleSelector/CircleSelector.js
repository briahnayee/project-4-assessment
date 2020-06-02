import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {

    return(
        <div className="CircleSelector">
            <button onClick={c => {
                props.setSelectedCircle(1)
            }} className={props.selectedCircle == 1 ? 'selected' : ''} >Select Circle 1</button>
            <button onClick={c => {
                props.setSelectedCircle(2)
            }} className={props.selectedCircle == 2 ? 'selected' : ''} >Select Circle 2</button>
            <button onClick={c => {
                props.setSelectedCircle(3)
            }} className={props.selectedCircle == 3 ? 'selected' : ''} >Select Circle 3</button>
            <button className={props.selectedCircle == 4 ? 'selected' : ''} onClick={c => {
                props.setSelectedCircle(4)
            }}>Select Circle 4</button>
        </div>
        
    )
}

export default CircleSelector