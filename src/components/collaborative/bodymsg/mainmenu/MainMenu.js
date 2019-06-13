import React, { Component } from "react"

import Discussion from "../sidemenu/categories/Discussion"
import SurTerrain from "../sidemenu/categories/SurTerrain"
import Data from "../sidemenu/categories/Data"
import Interviews from "../sidemenu/categories/Interviews"
import Lectures from "../sidemenu/categories/Lectures"

class MainMenu extends Component {

    /* HUB CENTRAL  */



    //
    constructor(props){
        super(props);
        this.state={

            // Ecrire une fonction qui va recevoir le nom et le tableau ou le message sera ecrit. C'est a dire plusieurs tableaux avec une seule fonction.
            msgListDiscussion:[

                {
                    id:1,
                    texte: "Texte de discussion "
                
                },
            ],
            msgListSurTerrain:[

                {
                    id:1,
                    texte: "Texte sur le terrain "
                },
            ],
            msgListData:[

                {
                    id:1,
                    texte: "Texte data "
                },
            ],
            msgListInterviews:[

                {
                    id:1,
                    texte: "Texte interviews "
                },
            ],
            msgListLectures:[

                {
                    id:1,
                    texte: "Texte lectures "
                },
            ]
        }

    }

    newMessage = (msg,msgList) => {
        const {msgListDiscussion,
                msgListSurTerrain,
                msgListData,
                msgListInterviews,
                msgListLectures
             } = this.state;
        
        switch(msgList){
            case "msgListDiscussion":
                this.setState({
                    msgListDiscussion: msgListDiscussion.concat(
                        {
                        id: this.state.msgListDiscussion.length + 1,
                        texte: msg
                        }
                    )
                });
                break;
            case "msgListSurTerrain":
                this.setState({
                    msgListSurTerrain: msgListSurTerrain.concat(
                        {
                        id: this.state.msgListSurTerrain.length + 1,
                        texte: msg
                        }
                    )
                });
                break;
            case "msgListData":
                this.setState({
                    msgListData: msgListData.concat(
                        {
                        id: this.state.msgListData.length + 1,
                        texte: msg
                        }
                    )
                });
                break;
            case "msgListInterviews":
                this.setState({
                    msgListInterviews: msgListInterviews.concat(
                        {
                        id: this.state.msgListInterviews.length + 1,
                        texte: msg
                        }
                    )
                });
                break;
            case "msgListLectures":
                this.setState({
                    msgListLectures: msgListLectures.concat(
                        {
                        id: this.state.msgListLectures.length + 1,
                        texte: msg
                        }
                    )
                });
                break;
            default :
                this.setState({
                    msgListDiscussion: msgListDiscussion.concat(
                        {
                        id: this.state.msgListDiscussion.length + 1,
                        texte: msg
                        }
                    )
                });
        }
        
    }
    

    render(){
        const {componentName} = this.props;
        switch(componentName){
            case "discussion" :
                return (
                    <div>
                        <Discussion
                            newMessage={this.newMessage}
                            msgList={this.state.msgListDiscussion}
                            msgListType= "msgListDiscussion"
                        />
                    </div>
                
                );

            case "surterrain" :
                return (
                    <div>
                        <SurTerrain
                            newMessage={this.newMessage}
                            msgList={this.state.msgListSurTerrain}
                            msgListType= "msgListSurTerrain"
                        />
                    </div>
                
                );

            case "data" :
                return (
                    <div>
                        <Data
                            newMessage={this.newMessage}
                            msgList={this.state.msgListData}
                            msgListType= "msgListData"
                        />
                    </div>
                
                );

            case "interviews" :
                return (
                    <div>
                        <Interviews
                            newMessage={this.newMessage}
                            msgList={this.state.msgListInterviews}
                            msgListType= "msgListInterviews"
                        />
                    </div>
                
                );

            case "lectures" :
                return (
                    <div>
                        <Lectures
                            newMessage={this.newMessage}
                            msgList={this.state.msgListLectures}
                            msgListType= "msgListLectures"
                        />
                    </div>
                
                );

            default: 
                return (
                    <div>
                        <Discussion
                            newMessage={this.newMessage}
                            msgList={this.state.msgListDiscussion}
                            msgListType= "msgListDiscussion"
                        />
                    </div>
                
                );
        }
    }
}

export default MainMenu;