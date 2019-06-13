import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AsideStyle } from './AsideStyle'


class Aside extends Component {

    render() {
        const { classes } = this.props;
            return(
                <div className={classes.asideTop}>
                    <p className={classes.pReports}>
                        reportages collaboratifs
                    </p> 
                </div>
            )
    }
}

export default withStyles(AsideStyle)(Aside);