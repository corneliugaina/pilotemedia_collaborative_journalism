import React, { Component } from "react"
import SideMenu from "../bodymsg/sidemenu/SideMenu"
import MainMenu from "./mainmenu/MainMenu"


class BodyMsg extends Component {

    render(){
        return(
        <div className="BodyMsg">
            <SideMenu SetComponentName = { this.props.SetComponentName }/>
            <MainMenu componentName = { this.props.componentName }/> {/* Ici on appelle la fonction componenentName */}
        </div>
        )
    }
}

export default BodyMsg;

