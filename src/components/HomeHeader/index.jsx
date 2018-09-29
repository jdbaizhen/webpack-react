import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput/index.jsx'

import '../../static/css/common.css'
import './index.less'
import planet from '../../static/icon/planet.svg'
import alien from '../../static/icon/alien.svg'

class HomeHeader extends React.Component{
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className="clear-fix homeheader-container">
                <div className="float-left homeheader-left">
                    <Link to={{pathname:'/city'}} className="href">
                        {this.props.cityName}
                        <img src={planet} alt="address"/>
                    </Link>
                </div>
                <div className="float-right homeheader-right">
                    <img src={alien} alt="admin"/>
                </div>
                <div className="homeheader-middle">
                    <SearchInput/>
                </div>
            </div>
        )
    }
}

export default HomeHeader