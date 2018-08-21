import React from 'react'
import { Link } from 'react-router-dom'
import '../../static/css/common.css'
import './index.less'
import planet from '../../static/icon/planet.svg'
import alien from '../../static/icon/alien.svg'
import satellite from '../../static/icon/satellite.svg'

class HomeHeader extends React.Component{
    render() {
        return (
            <div className="clear-fix homeheader-container">
                <div className="float-left homeheader-left">
                    <Link to="/city" className="href">
                        {this.props.cityName}
                        <img src={planet} alt="address"/>
                    </Link>
                </div>
                <div className="float-right homeheader-right">
                    <img src={alien} alt="admin"/>
                </div>
                <div className="homeheader-middle">
                    <img src={satellite} alt="search"/>
                    <input type="text" placeholder="请输入关键字"/>
                </div>
            </div>
        )
    }
}

export default HomeHeader