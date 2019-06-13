import React, { Component } from "react"
import MessagesContainer from "../../mainmenu/messagescontainer/MessagesContainer";
import InputMessage from "../../mainmenu/inputmessages/InputMessage";

class Data extends Component {

    render(){
        return(
            <div className="msgMainContainer">
                <MessagesContainer
                    msgList={this.props.msgList}
                />
                <InputMessage
                    newMessage={this.props.newMessage}
                    msgListType={this.props.msgListType}
                /> 
            </div>
        )
    }

}

export default Data;