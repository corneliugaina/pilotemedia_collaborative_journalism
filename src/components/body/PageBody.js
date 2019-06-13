import React, { Component } from "react"
import ThematiqueBody from "./thematiqueBody/ThematiqueBody";
import Aside from "./aside/Aside";
import SocialMedia from "./socialMedia/SocialMedia";

class PageBody extends Component {
    
    render(){
        return(
            <div className="pageBody">
                <ThematiqueBody/>
                <Aside/>
                <SocialMedia/>
            </div>
        )
    }
}

export default PageBody;