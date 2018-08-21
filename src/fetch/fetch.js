import 'whatwg-fetch'
import 'es6-promise'

function obj2String(obj, arr = [], idx = 0) {
    for (let item in obj) {
      arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
}
  
function commonFetcdh(url, options, method = 'GET') {
    const searchStr = obj2String(options)
    let initObj = {}
    if (method === 'GET') { // 如果是GET请求，拼接url
      if(searchStr!=''){
        url += '?' + searchStr
      }else{
        url = url
      }
      initObj = {
        method: method, 
        headers: new Headers({
          'Accept': 'application/json',
        }),
        credentials: 'include'
      }
    } else {
      initObj = {
        method: method,  
        credentials: 'include',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: searchStr
      }
    }
    let result = fetch(url, initObj).then(res => {
      return res.json()
    });
    return result;
}
  
export let GET = (url, options) => {
    return commonFetcdh(url, options, 'GET')
}

export let POST = (url, options) => {
    return commonFetcdh(url, options, 'POST')
}