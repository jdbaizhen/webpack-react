import * as Types from '../action-type.js'

let initState = {
    cityName: '北京'
}
let userCityNameR = ( state = initState, action ) => {
    switch ( action.type ) {
        case Types.USER_CITY_NAME:
            return {
                ...state,
                cityName: action.data.cityName
            }
        default: return state
    }
}

export default {
    userCityNameR
}