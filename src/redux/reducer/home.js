import * as Types from '../action-type.js'

let initState = {
    cityName: '上海'
}
let userCityNameR = ( state = initState, action ) => {
    switch ( action.type ) {
        case Types.USER_CITY_NAME:
            return {...state,
                cityName: action.data
            }
        default: return state
    }
}

export default {
    userCityNameR
}