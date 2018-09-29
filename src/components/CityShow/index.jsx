import React from 'react'
import './index.less'

class CityShow extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick = (cityName) => {
        let { cityFn } = this.props
        cityFn(cityName)     
    }

    render() {
        let { cityName, cityList } = this.props 
        return (
            <div className="city-list">
                <div className="city-current">{cityName}</div>
                <div className="city-all">
                    <h3>热门城市</h3>
                    <ul className="clear-fix">
                        {
                            cityList.map( (item, index) => {
                                return <li className="float-left" onClick={()=>this.handleClick(item)} key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default CityShow