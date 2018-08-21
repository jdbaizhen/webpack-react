import React from 'react'
import rocket from '../../static/icon/rocket.svg'
import './index.less'

class Header extends React.Component{
    constructor(){
        super()
    }

    back = () => {
        window.history.back()
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.back}>
                   <img src={rocket} alt=""/>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )  
    }
}

export default Header