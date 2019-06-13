import React, { Component } from "react"
import TitleReport from "./TitleReport"
import DescriptionCategorie from "./DescriptionCategorie"
import { withStyles } from '@material-ui/core/styles';
import {HeaderMsgStyle} from "./HeaderMsgStyle"

// import LogoMsg from "./LogoMsg"



class HeaderMsg extends Component {
    
    render(){
        const {classes} = this.props;

        return(
            <div className={classes.headerMsg}>
                <h1 className={classes.titleReport}>
                    <TitleReport />
                </h1>
                <h2 className={classes.descriptionCategorie}>
                    <DescriptionCategorie componentName={this.props.componentName}/>
                </h2>
                
                
            </div>
        )
    }
}

export default withStyles(HeaderMsgStyle)(HeaderMsg);