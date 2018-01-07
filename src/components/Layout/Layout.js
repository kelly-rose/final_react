import React from 'react';
import Auxd from "../../hoc/Auxd";
import classes from './Layout.css'

const layout = (props) => (
    <Auxd>
        <div>
            Toolbar,SideDrawer,Backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxd>
)

export default layout;