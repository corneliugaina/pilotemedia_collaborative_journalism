import React, { Component } from "react"
import Menu from "./menu/Menu"
import LogoCJ from "./menu/LogoCJ"

class Header extends Component {

    render(){
        return(
            <div className="header">
                <Menu/>
                <LogoCJ/>
            </div>
        )
    }
}

export default Header;