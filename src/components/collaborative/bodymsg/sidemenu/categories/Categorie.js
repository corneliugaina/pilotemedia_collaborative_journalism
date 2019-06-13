import React, { Component } from "react"
import { withStyles } from '@material-ui/core/styles'
import {CategorieStyle} from './CategorieStyle'



class Categorie extends Component {

    setName = () => {
        this.props.SetComponentName(this.props.name)
    }

    render(){
        const {description}= this.props;
        const { classes }= this.props;

        return(
            <div className={ classes.chatTopic } onClick={this.setName}>
                {description}
            </div>
        )
    }
}

export default withStyles(CategorieStyle)(Categorie);