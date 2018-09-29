import * as types from '../action-type.js'
import { getSearchList } from '../../fetch/search.js'

export const getSearchListData = (params) => (dispatch) => (
    getSearchList(params)
)