import React from 'react'
import Header from '../../components/Header/index.jsx'

class City extends React.Component{
    constructor(){
        super()
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
            </div>
        )  
    }
}

export default City