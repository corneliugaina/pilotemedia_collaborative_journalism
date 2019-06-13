import React, {Component} from "react"
import { withStyles } from '@material-ui/core/styles'
import { MessageContainerStyle } from './MessageContainerStyle'
import Messages from './Messages'

class MessagesContainer extends Component{

    render(){

        const { classes, msgList } = this.props;
        const MessagesList = msgList.map((item)=>{
            return(
                <Messages
                    key={item.id}
                    texte={item.texte}
                />
            ); 
        })
        return(
            <div className={classes.messageContainer}>
                {MessagesList}
            </div>
        )
    }
}

export default withStyles(MessageContainerStyle)(MessagesContainer);