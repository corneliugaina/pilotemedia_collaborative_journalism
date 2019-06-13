import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { SocialMediaStyle } from './SocialMediaStyle'

class SocialMedia extends Component {

    render(){
        
        const { classes } = this.props;
            return(
                <div className={classes.socialMedia}>
                    <div className={classes.elementsSocial}>
                        <div className={classes.twitterWrap}>
                            <a href="https://twitter.com/JoieCatherine" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/img/twitter.png" alt="imgTwitter" width="24vw" height="24vh" />            
                            </a>
                            <a href="https://twitter.com/JoieCatherine" target="_blank" rel="noopener noreferrer">
                                <p className={classes.p}>@JoieCatherine</p>
                            </a>
                        </div>
                        <div className={classes.mail}>
                            <img src="/assets/img/gmail.png" alt="imgGmail" width="24vw" height="24vh" />
                            <p className={classes.p}>JOIE.CATHERINE@GMAIL.COM</p>
                        </div>
                    </div>

                </div>
            )
    }
}

export default withStyles(SocialMediaStyle)(SocialMedia);