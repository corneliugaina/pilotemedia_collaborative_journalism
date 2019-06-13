import React, { Component } from 'react'
import HeaderMsg from "../collaborative/headermsg/HeaderMsg"
/* import BodyMsg from "../collaborative/bodymsg/BodyMsg"
 */import "./PageMsgStyle.css"
import LogoMsg from '../collaborative/headermsg/LogoMsg';
import BodyMsg from '../collaborative/bodymsg/BodyMsg';
import Aside from '../body/aside/Aside.jsx';
import MenuMobileTopics from '../header/MenuMobile/MenuMobileTopics'; 


class PageMsg extends Component {


    constructor(props){
        super(props);
        this.state={
            componentName: "discussion",
        }
        this.SetComponentName = (name) => {
            this.setState({
                componentName: name
            })
        }
    }

    render() { 
        return(
            <div className="globalPage">
                <HeaderMsg 
                    componentName={this.state.componentName}
                />
                <LogoMsg/>
                <BodyMsg 
                    componentName={this.state.componentName}
                    SetComponentName={this.SetComponentName}
                    />
                <Aside/>
                <MenuMobileTopics/>
            </div>
        )
    }
}

export default PageMsg;