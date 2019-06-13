import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles';
import {LogoCJStyle} from "./LogoCJStyle"


class LogoCJ extends Component {

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.menu}>
                Hello Logo.
            </div>
        )
    }
}

export default withStyles(LogoCJStyle)(LogoCJ);