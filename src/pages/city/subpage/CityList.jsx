import React from 'react'
import CityShow from '../../../components/CityShow/index.jsx'

class CityList extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        let { cityName, cityList, cityFn } = this.props
        let cityParams = {
            cityName,
            cityList,
            cityFn
        }
        return (
            <div>
                <CityShow {...cityParams}/>
            </div>
        )
    }
}

export default CityList