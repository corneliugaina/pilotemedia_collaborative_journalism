import React, {Component} from "react"
import { withStyles } from '@material-ui/core/styles'
import { InputMessageStyle } from './InputMessageStyle'

class InputMessage extends Component{

    constructor(props){
        super(props);
        this.setNewMessage = () => {
            const {msgListType,newMessage} = this.props;
            let msg = document.getElementById("texte").value;
            newMessage(msg,msgListType);
        }
    }

    render(){

        const { classes } = this.props;

        return(
            <div className={classes.inputMessage}>
                <div>
                    <img src="/assets/img/icon-upload.png" alt="upload" width="32vw" height="22vh"  />
                </div>
                <div>
                    <textarea id="texte"  className={classes.inputArea} placeholder="Input Zone"></textarea>
                </div>
                <div> 
                    <button onClick={this.setNewMessage}>Submit</button>
                </div>
            </div>
        )
    }
}

export default withStyles(InputMessageStyle)(InputMessage);