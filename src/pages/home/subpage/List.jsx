import React from 'react'
import HomeList from '../../../components/HomeList/index.jsx'
import LoadMore from '../../../components/LoadMore/index.jsx'
import './index.less'
import { postList } from '../../../fetch/home.js'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasMore: false,
            data: [],
            isLoadingMore: false,
            page: 1
        }
    }
    componentDidMount() {
        this.loadingFirst()     
    }

    componentWillReceiveProps(newProps) {
        let { cityName } = newProps
        console.log(newProps,cityName)
    }

    loadingFirst = () => {
        let { cityName } = this.props
        this.loadingPost(cityName, 0)
    }

    loadingMore = () => {
        let { cityName } = this.props    
        let { page } = this.state
        this.setState({isLoadingMore: true})
        postList({cityName:cityName, page: page}).then( res => {
            if(res.result){
                this.setState({
                    hasMore: res.data.hasMore,
                    data: this.state.data.concat(res.data.data),
                    isLoadingMore: false,
                    page: page+1
                })
            }else{
                alert(res.message)
            }
        })
    }

    loadingPost = (cityName, page) => {
        postList({cityName:cityName, page: page}).then( res => {
            if(res.result){
                this.setState({
                    hasMore: res.data.hasMore,
                    data: res.data.data
                })
            }else{
                alert(res.message)
            }
        })
    }

    render() {
        let { data, hasMore, isLoadingMore } = this.state
        let loadMoreParams = {
            loadingFn: this.loadingMore,
            isLoading: isLoadingMore
        }
        return (
            <div>
                <h3>猜你喜欢</h3>
                {
                    data.length>0
                    ?<HomeList data={data}/>
                    :<div>正在加载。。。</div>
                }
                {
                    hasMore
                    ?<LoadMore {...loadMoreParams}/>
                    :''
                }
            </div>
        )
    }
}

export default List