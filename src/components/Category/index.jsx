import React from 'react'
import { Link } from 'react-router-dom'
import ReactSwipe from 'react-swipe'
import './index.less'

class Category extends React.Component {
    constructor(porps){
        super()
        this.state = {
            index: undefined,
            list: [
                {goods: ['H','T','M','L','~','+','C','S','S','+']},
                {goods: ['J','A','V','A','S','C','R','I','P','T']},
                {goods: ['R','E','A','C','T','+','V','U','E','+']}
            ]
        }
    }
    render() {
        let option = {
            auto: 2000,
            callback: (index) => {
                this.setState({index: index})
            }
        }
        let { index, list } = this.state
        return (
            <div className="category">
                <ReactSwipe className="carousel" swipeOptions={option}>
                    {
                        list.map( (item, index) => {
                            return <ul key={index}>
                                {
                                    item.goods.map( (ite, ind) => {
                                        return (
                                            <Link key={ind} to={{pathname:`/search/${ite}`}}>
                                                <li key={ind}>{ite}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        })
                    }
                </ReactSwipe>
                <ol>
                    <li className={index===0 ? 'actived' : ''}></li>
                    <li className={index===1 ? 'actived' : ''}></li>
                    <li className={index===2 ? 'actived' : ''}></li>
                </ol>
            </div>
        )
    }
}

export default Category