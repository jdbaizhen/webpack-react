import { GET, POST } from './fetch.js'
import * as url from './url.js'

export const getCityList = () => ( GET( url.cityList ) )