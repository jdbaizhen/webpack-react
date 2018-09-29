import React from 'react';
import PropTypes from 'prop-types';
import './index.less'
import search from '../../static/icon/search.svg'

class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchName: ''
        }
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    handleChange = (e) => {
        let value = e.target.value
        this.setState({
            searchName: value
        })
    }

    handleKeyUp = (e) => {
        if(e.keyCode !== 13){
            return
        } else {
            this.context.router.history.push(`/search/all/${this.state.searchName}`)
        }
    }

    componentDidMount() {
        let ids = this.props.ids;
        if(ids){
            this.setState({searchName: ids})
        }
    }

    render() {
        let { searchName } = this.state;
        return (
            <div className="search-input">
                <img src={search} alt="search"/>
                <input type="text" placeholder="请输入关键字" value={searchName} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
export default SearchInput