import React , { Component } from 'react'
import './main.css'
import yushou from '../images/yushou.jpg'
import overwatch from '../images/overwatch_03.jpg'
import bigpic from '../images/bigpic_03.jpg'
import Banner from '../Banner/Banner'
import Count from '../Count/Count'
import Select from '../Select/Select'

class Main extends Component{
  render () {
    return (

      <div className='main'>
        <Banner />
      <div className="inner">
			<div className="content">
				<div className="left">
					<div className="sale">
						<img src={yushou} alt={yushou} />
						<span className="T">龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
					</div>
          <div className="bigtime">

            <Count />
  					<div className="watch">
  						<span>相关专区</span>
  						<br />
  						<img src={overwatch} alt={overwatch}></img>
  					</div>
  					<div className="share">
  						<span>分享</span>
  						<a ><i className="iconfont">&#xe60d;</i></a>
  						<a ><i className="iconfont">&#xe615;</i></a>
  					</div>
          </div>

				</div>
				<div className="right">
					<div className="money">
						<span>定金</span>
						<div className="money1">
							<span>￥500.00</span><br></br>
							<span>全款金额：￥1500.00</span>
						</div>
					</div>
          <Select />
					<div className="tips">
						<span className="yellow">注：</span><span className="white">商品将于</span><span className="yellow">2016/10/5</span><span className="white">统一发货!</span>
					</div>
				</div>
				<div className="bottom clear">
					<a href="pages/购物车/old.html">立即预订</a>
				</div>
			</div>
			<img src={bigpic} alt={bigpic} />
		</div>
      </div>
    )
  }
}

export default Main
