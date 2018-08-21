import React from 'react'
import './index.less'

class LoadMore extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick() {
        let { loadingFn } = this.props
        loadingFn()
    }

    componentDidMount() {
        let loadMoreNode = this.refs.loadMoreDiv
        let timeoutId
        let { loadingFn, isLoading } = this.props

        function callback() {
            const top = loadMoreNode.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if(top && top<windowHeight){
                loadingFn()
            }
        }

        window.addEventListener('scroll', ()=>{
            if(isLoading){
                return 
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout( callback, 50 )
        },false)
    }

    render() {
        let { isLoading } = this.props
        return (
            <div className="load-more" ref="loadMoreDiv">
                {
                    isLoading
                    ?<span>正在加载...</span>
                    :<span onClick={this.handleClick.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
}

export default LoadMore