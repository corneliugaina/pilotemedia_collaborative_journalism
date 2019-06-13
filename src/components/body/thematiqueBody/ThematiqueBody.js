import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { ThematiqueBodyStyle } from './ThematiqueBodyStyle'
import ThematiqueItem from './thematiqueItem/ThematiqueItem'
import { reportages } from './thematiqueItem/Reportage'

class ThematiqueBody extends Component {

    render(){
        
        const listeReportages  = reportages.map( (reportage) =>{
            return (
                <ThematiqueItem  
                    key = { reportage.id } 
                    reportage = {reportage}
                />
                
            )
        })
        const { classes } = this.props;
            return (



                <div className={classes.ThematiqueBody}>
                    <div className={classes.ligne}></div>
                    <div> {listeReportages}</div>
                </div>
        )
    }

}

export default withStyles(ThematiqueBodyStyle)(ThematiqueBody);
