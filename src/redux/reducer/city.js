import * as Types from '../action-type.js'

let initCityList = {
    cityList: []
}

let getCityListR = ( state = initCityList, action ) => {
    switch( action.type ) {
        case Types.CITY_LIST: 
            return {
                ...state,
                cityList: action.list
            }
        default: return state
    }
} 

export default {
    getCityListR
}