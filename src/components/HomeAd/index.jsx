import React from 'react'
import './index.less'

class HomeAd extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        let adData = this.props
        return (
            <div className="homeAd">
                <ul>
                    {
                        adData.adData.map( (item, index) => {
                            return <li key={index}>{item.title}</li>
                        })
                    }
                </ul>
            </div>   
        )
    }
}

export default HomeAd