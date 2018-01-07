import React from 'react';
import classes from './BuildControl.css';

//(props)를 해주면 this.props.블라블라 안하고 바로 props.블라블라로 사용할 수 있음!
const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
        <button 
            className={classes.More} 
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;