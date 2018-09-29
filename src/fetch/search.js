import { GET, POST } from './fetch.js'
import { searchList } from './url.js'

export const getSearchList = (params) => ( POST(searchList, params) )
