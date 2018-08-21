import React from 'react'
import HomeAd from '../../../components/HomeAd/index.jsx'
import './index.less'

import { getAd } from '../../../fetch/home.js'

class Ad extends React.Component{
    constructor(){
        super()
        this.state = {
            adData: []
        }
    }
    componentDidMount() {
        getAd().then( res => {
            if(res.result){
                this.setState({
                    adData: res.data
                })
            }else{
                alert(res.message)
            }
        })
    }
    render() {
        let { adData } = this.state
        return (
            <div>
                <h3>超值特惠</h3>
                {
                    adData.length>0
                    ?<HomeAd adData={adData}/>
                    :<div>正在加载。。。</div>
                }
            </div>
        )
    }
}

export default Ad