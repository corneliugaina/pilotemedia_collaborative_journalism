import React, {Component, Fragment} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {ThematiqueItemStyle} from './ThematiqueItemStyle'
import Button from '@material-ui/core/Button'


class ThematiqueItem extends Component {
        
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.reportage} >
                <h1 className={classes.title}> {this.props.reportage.title } </h1>
                <h2 className={classes.subtitle}> {this.props.reportage.subtitle}</h2>
                <div className={classes.wrap}>
                    <Fragment>
                        <Button className={classes.button} href='#' variant="outlined">
                            {this.props.reportage.hashtagOne }
                        </Button>
                        <Button className={classes.button} href='#' variant="outlined">
                            {this.props.reportage.hashtagTwo }
                        </Button>
                    </Fragment>
                    <a className={classes.link} href='../../../pages/PageMsg'>
                        <img className={classes.image} src= "/assets/img/bulle.png" alt="imgMessengerLink"  width="32vw" height="32vw" /> 
                    </a>
                </div>
            </div>
        )}
}


export default withStyles(ThematiqueItemStyle)(ThematiqueItem);
