import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../redux/action/search.js'
import SearchHeader from '../../components/SearchHeader/index.jsx'
import SearchList from '../../components/SearchList/index.jsx'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchListData: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }

    componentDidMount() {
        let { userCityNameR, match } = this.props
        let { id, ids } = match.params
        let cityName = userCityNameR.cityName
        let { page } = this.state
        let params = {
            id,
            ids,
            cityName,
            page
        }
        this.getData(params)
    }

    componentWillReceiveProps(newProps){
        this.setState({page: 0})
        let { userCityNameR, match } = newProps
        let { id, ids } = match.params
        let cityName = userCityNameR.cityName
        let params = {
            id,
            ids,
            cityName,
            page: 0
        }
        this.getData(params)
    }

    getData = (params) => {
        let { getSearchListData } = this.props
        getSearchListData(params).then( res => {
            if(res.result){
                let page = this.state.page + 1
                this.setState({
                    searchListData: res.data.data,
                    hasMore: res.data.hasMore,
                    page: page
                })
            }else{
                alert('没有获取到数据');
            }
        })
    }

    loadMore = () =>{
        this.setState({isLoadingMore: true})
        let { userCityNameR, match } = this.props
        let { id, ids } = match.params
        let cityName = userCityNameR.cityName
        let { page } = this.state
        let params = {
            id,
            ids,
            cityName,
            page
        }
        let { getSearchListData } = this.props
        getSearchListData(params).then( res => {
            if(res.result){
                let page = this.state.page + 1
                this.setState({
                    searchListData: this.state.searchListData.concat(res.data.data),
                    hasMore: res.data.hasMore,
                    page: page,
                    isLoadingMore: false
                })
            }else{
                alert('没有获取到数据');
            }
        })
    }

    render() {
        let ids = this.props.match.params.ids
        let { hasMore, searchListData, isLoadingMore } = this.state
        let loadMoreFn = this.loadMore
        let params = {
            hasMore,
            searchListData,
            loadMoreFn,
            isLoadingMore
        }
        return (
            <div>
                <SearchHeader ids={ids}/>
                <SearchList params={params}/>  
            </div>
        )
    }
}

export default connect(
    state => ({...state}),
    action
)(Search)