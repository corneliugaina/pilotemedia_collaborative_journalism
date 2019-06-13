import React, { Component } from "react"




class Description extends Component {

    render(){
        const {componentName}=this.props;
        switch(componentName){
            case "discussion" :
                return(
                    <div>
                        <p>" Texte de discussion Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux "</p>
                    </div>
                )

            case "surterrain" :
                return(
                    <div>
                        <p>Texte sur le terrain Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux "</p>
                    </div>
                )

            case "data" :
                return(
                    <div>
                       <p>Texte sur data Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux "</p>
                    </div>
                )

            case "interviews" :
                return(
                    <div>
                        <p>Texte sur interviews Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux "</p>
                    </div>
                )

            case "lectures" :
                return(
                    <div>
                        <p>Texte sur lectures Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux "</p>
                    </div>
                )

            default: 
                return(
                    <div>
                        <p>Texte sur description Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux "</p>
                    </div>
                )
        }
        
    }
}

export default Description;

