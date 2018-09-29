import React from 'react';
import SearchInput from '../SearchInput/index.jsx'


import './index.less'
import prev from '../../static/icon/previous.svg'

class SearchHeader extends React.Component{
    constructor(props){
        super(props)
    }

    back = () => {
        window.history.back()
    }

    render() {
        return (
            <div className="search-header-container">
                <img src={prev} alt="prev" className="float-left" onClick={this.back}/>
                <div className="float-right" style={{width: '90%'}}>
                    <SearchInput ids={this.props.ids}/>
                </div> 
            </div>
        ) 
    }
}
export default SearchHeader