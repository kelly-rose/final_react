import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]

//https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8109028?start=0
//Connecting State to build controls
const buildControls = (props) =>{
   return (<div className={classes.BuildControls}>
        <p>Current Price:.........</p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}

    </div>);
};

export default buildControls;