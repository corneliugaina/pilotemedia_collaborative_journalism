import React, {Component} from "react"
import { withStyles } from '@material-ui/core/styles'
import { MessagesStyle } from "./MessagesStyle"

class Messages extends Component {

    render(){

        const { classes, texte } = this.props;
            return(
                <div className={classes.messages}>
                    <div className={classes.avatar}>
                        <img src="/assets/img/avatar-1.png" alt="avatar" width="40px" height="40px" />
                        
                    </div>
                    <div className={classes.texte}>
                        <p>{texte}</p>
                    </div>
                    <div className={classes.reply}>
                        <img src="/assets/img/icon-reply.png" alt="reply" width="40px" height="40px" />
                    </div>
                </div>
            )
    }
}

export default withStyles(MessagesStyle)(Messages);