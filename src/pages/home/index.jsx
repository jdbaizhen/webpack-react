import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../redux/action/home.js'

import HomeHeader from '../../components/HomeHeader/index.jsx'
import Catrgory from '../../components/Category/index.jsx'
import Ad from './subpage/Ad.jsx'
import List from './subpage/List.jsx'

import LocalStore from '../../utils/localstorerage.js'
import { CITYNAME } from '../../config/localStoreKey.js'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        
        }
    }
    componentDidMount() {
        let { userCityName } = this.props; 
        let cityName = LocalStore.getItem(CITYNAME)
        userCityName({cityName})
    }



    render() {
        let { cityName } = this.props;
    
        return (
            <div> 
                <HomeHeader cityName={cityName}/>
                <Catrgory/>    
                <div style={{height: '10px'}}></div>
                <Ad/>
                <div style={{height: '10px'}}></div>
                <List cityName={cityName}/>  
            </div>
        )  
    }
}

export default connect(
    state => ({...state.userCityNameR}),
    action
)(Home)