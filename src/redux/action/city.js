import * as types from '../action-type.js'
import { getCityList } from '../../fetch/city.js'

export let getCityListAction = () => (dispatch) => (
    getCityList().then( res => {
        if( res.result ){
            dispatch({
                type: types.CITY_LIST,
                list: res.data
            })
        }
    })    
)

export let userCityName = (data) => (dispatch) => (
    dispatch({
        type: types.USER_CITY_NAME,
        data: data
    })
)