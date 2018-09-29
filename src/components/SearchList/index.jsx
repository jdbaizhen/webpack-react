import React from 'react'
import './index.less'
import LoadMore from '../LoadMore/index.jsx'

class SearchList extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick = (obj) => {
        console.log(obj+'111')
    }

    render () {
        let { searchListData, hasMore, isLoadingMore, loadMoreFn } = this.props.params
        let params = {
            loadingFn: loadMoreFn,
            isLoading: isLoadingMore
        }
        return (
            <div>
                <ul className="search-list">
                    {
                        searchListData.map( (item ,index) => {
                            return (
                                <li key={index} onClick={()=>this.handleClick()}>
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    hasMore
                    ?<LoadMore {...params}/>
                    :''   
                }
            </div>
        )
    }
}

export default SearchList