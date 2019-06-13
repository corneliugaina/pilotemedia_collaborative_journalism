import React, { Component } from 'react'
import Header from '../header/Header'
import PageBody from '../body/PageBody'

class Reportages extends Component {

    render() {
        return(
            <div className="pagesContent">
                <Header/>
                <PageBody/>
            </div>
        )
    }

}

export default Reportages;