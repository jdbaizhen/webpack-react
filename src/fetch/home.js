import { GET, POST } from './fetch.js'
import * as url from './url.js'

export const getAd = () => ( GET(url.homeAd) )
export const postList = (params) => ( POST(url.homeList, params)) 