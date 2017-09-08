import React , { Component } from 'react'
import './main.css'
import yushou from '../images/yushou.jpg'
import overwatch from '../images/overwatch_03.jpg'
import bigpic from '../images/bigpic_03.jpg'

class Main extends Component{
  render () {
    return (
      <div className='main'>
      <div className="inner">
			<div className="content">
				<div className="left">
					<div className="sale">
						<img src={yushou} alt={yushou} />
						<span className="T">龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
					</div>
          <div className="bigtime">
            <div className="endtime">
  						<p>距预售结束</p>
  						<div className="time">
  							<span className='date'></span>
  							<span>:</span>
  							<span className='hour'></span>
  							<span>:</span>
  							<span className='minute'></span>
  							<span>:</span>
  							<span className='second'></span>
  							<span>天</span>
  							<span>时</span>
  							<span>分</span>
  							<span>秒</span>
  						</div>

  					</div>
  					<div className="watch">
  						<span>相关专区</span>
  						<br />
  						<img src={overwatch} alt={overwatch}></img>
  					</div>
  					<div className="share">
  						<span>分享</span>
  						<a href=""><i className="iconfont">&#xe60d;</i></a>
  						<a href=""><i className="iconfont">&#xe615;</i></a>
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
					<div className="style">
						<span>款式</span>
						<a href="">iPhone5</a>
						<a href="">iPhone6</a>
						<a href="">iPhone6+</a>
					</div>
					<div className="size">
						<span>尺码</span>
						<a href="">XXS</a>
						<a href="">XS</a>
						<a href="">S</a>
						<a href="">M</a>
						<a href="">L</a>
						<a href="">XL</a>
						<a href="">XXL</a>
					</div>
					<div className="num">
						<span>数量</span>
						<a href="" className="sub">-</a>
						<input type="text" value="1" className="num1"></input>
						<a href="" className="add">+</a>
					</div>
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
