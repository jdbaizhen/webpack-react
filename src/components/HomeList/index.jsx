import React from 'react'
import './index.less'

class HomeList extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        let { data } = this.props
        return (
            <div className="home-list clear-fix">
                {
                    data.map( (item, index) => {
                        return <div key={index} className="home-list-every float-left">{item.title}</div>
                    })
                }
            </div>
        )
    }
}

export default HomeList