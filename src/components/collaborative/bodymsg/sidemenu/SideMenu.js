import React, { Component } from "react"
import Categorie from "./categories/Categorie"

class SideMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            cat:[
                {
                    id:1,
                    name: "discussion",
                    description: "Discussion"
                },
                {
                    id:2,
                    name: "surterrain",
                    description: "Sur le terrain"
                },
                {
                    id:3,
                    name: "data",
                    description: "Data"
                },
                {
                    id:4,
                    name: "interviews",
                    description: "Interviews"
                },
                {
                    id:5,
                    name: "lectures",
                    description: "Lectures"
                },
            ]
        }
    }

    render(){

        const {SetComponentName}=this.props;
        const {cat} = this.state;
        const Categories = cat.map((item) => {
            return(
                <Categorie
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    SetComponentName={SetComponentName}
                />
            )
        })

        return(
            <div className="SideMenu">
                {Categories}
            </div>
        )
    }
}

export default SideMenu;
