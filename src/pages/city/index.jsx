import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../redux/action/city.js'

import Header from '../../components/Header/index.jsx'
import CityList from './subpage/CityList.jsx'

class City extends React.Component{
    constructor(){
        super()
    }

    componentDidMount() {
        let { getCityListAction } = this.props
        getCityListAction()
    }

    cityFn = ( cityName ) => {
        let { userCityName } = this.props
        userCityName({cityName: cityName})
    }

    componentWillReceiveProps( newProps ){
        console.log(newProps)
    }

    render() {
        let { cityName, cityList } = this.props
        let cityParams = {
            cityName,
            cityList,
            cityFn: this.cityFn
        }
        return (
            <div>
                <Header title="选择城市"/>
                <CityList {...cityParams}/>
            </div>
        )  
    }
}

export default connect(
    state => ({...state.getCityListR,...state.userCityNameR}),
    action
)(City)