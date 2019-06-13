import React, { Component } from "react"
import MenuItems from "./MenuItem"
import { withStyles } from "@material-ui/core";
import { MenuStyle } from "./MenuStyle";
/* import MenuItemMobile from "./MenuItemMobile";
 */
import MenuMobile from "../MenuMobile/MenuMobile"

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu:[
                {
                    id: 1,
                    name: "REPORTAGES",
                    path:"/",
                    themes:[
                        {
                            subName:"BLANC BLEU BLEME",
                            subPath:"/pagemsg"
                        }, 
                        {
                            subName:"TITRE DEUX",
                            subPath:"/#"
                        }, 
                        {
                            subName:"TITRE TROIS",
                            subPath:"/#"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "PRESENTATION",
                    path:"/presentation",
                    themes: [
                        {
                            subName:"TEMATHIQUE GRAL",
                            subPath:"/#"
                        },
                        {
                            subName:"CATHERINE JOIE",
                            subPath:"/#"
                        }, 
                        {
                            subName:"GAELLE HENKENS",
                            subPath:"/#"
                        }
                    ]
                },
                {
                    id: 3,
                    name: "FINANCEMENT",
                    path:"/financement",
                    themes:[]
                }

            ]

        }
    }
    render(){
        const { classes } = this.props;
        const menuitems = this.state.menu.map((item) =>{
            return (
            <MenuItems
                key={item.id}
                item={item}
            />
            )
        })
        return(
            <div className={classes.menu}>
                <div className="desktop">
                    {menuitems}
                </div>
                <div className="mobile">
                    <MenuMobile />
                </div>
            </div>
        )
    }
}

export default withStyles(MenuStyle)(Menu);