import { combineReducers } from 'redux';

import home from './home.js'
import city from './city.js'

export default combineReducers({
    ...home,
    ...city
})