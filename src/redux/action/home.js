import * as types from '../action-type.js'

export let userCityName = (data) => (dispatch) => (
    dispatch({
        type: types.USER_CITY_NAME,
        data: data
    })
)