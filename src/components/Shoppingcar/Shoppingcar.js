import React , {Component} from 'react'
import './shoppingcar.css'
import man from '../images/blackman.jpg'
import bg from '../images/bgpic.jpg'
// import login from '../images/login.jpg'
// import test from '../images/test_03.jpg'

class Shoppingcar extends Component{
  render(){
    return(
      <div className="shoppingcar">
        <div className="cont">
      			<div className="top1">
      				<div className="nain">
      					<div className="first">
      						<span>|<span className="span1">购物车</span><span className="span2">[<a href="">99</a>件]</span>
      						</span>
      					</div>
      					<div className="second">
      						<p>购物车</p>
      						<p>填写订单</p>
      						<p>付款,购买成功</p>
      					</div>
      				</div>
      			</div>
      			<div><img src={bg} alt="" /></div>
      			<div className="inner">
      				<div className="bignain" >
      					<div className="nav1">
      						<div><input type="checkbox" className="Allcheck" /></div>
      						<div>全选</div>
      						<div>商品</div>
      					</div>
      					<div className="nav2">
      						<div>单价</div>
      						<div>数量</div>
      						<div>小计</div>
      					</div>
      					<div className="nav3">操作</div>
      				</div>
      				<div className="neirong">
      					<div className="nain">
      						<div className="one"><input type="checkbox" className="littlecheck" /></div>
      						<div className="two"><img src={man} alt="" /></div>
      						<div className="open">
      						<p>龙之谷6周年限定大礼包大Boss冰龙款男<br />士T恤衫</p>
      						<p className="pp">款式：iphone 10</p>
      						<p>尺码：xL</p>
      						</div>
      						<div className="stop">
      							<span className="yunsuan1">75</span>
      							<a href='' className="yunsuan2">+</a>
      							<a href="" className="yunsuan3">1</a>
      							<a href='' className="yunsuan4">-</a>
      							<span className="yunsuan5">75</span>
      							<a href="" className="yunsuan6">X</a>
      						</div>
      					</div>
      					<div className="nain">
      						<div className="one"><input type="checkbox" className="littlecheck" /></div>
      						<div className="two"><img src={man} alt="" /></div>
      						<div className="open">
      						<p>龙之谷6周年限定大礼包大Boss冰龙款男<br />士T恤衫</p>
      						<p className="pp">款式：iphone 10</p>
      						<p>尺码：xL</p>
      						</div>
      						<div className="stop">
      							<span className="yunsuan1">75</span>
      							<a href='' className="yunsuan2">+</a>
      							<a href="" className="yunsuan3">1</a>
      							<a href='' className="yunsuan4">-</a>
      							<span className="yunsuan5">75</span>
      							<a href="" className="yunsuan6">X</a>
      						</div>
      					</div>
      					<div className="nain">
      						<div className="one"><input type="checkbox" className="littlecheck" /></div>
      						<div className="two"><img src={man} alt="" /></div>
      						<div className="open">
      						<p>龙之谷6周年限定大礼包大Boss冰龙款男<br/>士T恤衫</p>
      						<p className="pp">款式：iphone 10</p>
      						<p>尺码：xL</p>
      						</div>
      						<div className="stop">
      							<span className="yunsuan1">75</span>
      							<a href='' className="yunsuan2">+</a>
      							<a href="" className="yunsuan3">1</a>
      							<a href='' className="yunsuan4">-</a>
      							<span className="yunsuan5">75</span>
      							<a href="" className="yunsuan6">X</a>
      						</div>
      					</div>
      					<div className="nain">
      						<div className="one"><input type="checkbox" className="littlecheck" /></div>
      						<div className="two"><img src={man} alt="" /></div>
      						<div className="open">
      						<p>龙之谷6周年限定大礼包大Boss冰龙款男<br/>士T恤衫</p>
      						<p className="pp">款式：iphone 10</p>
      						<p>尺码：xL</p>
      						</div>
      						<div className="stop">
      							<span className="yunsuan1">75</span>
      							<a href='' className="yunsuan2">+</a>
      							<a href="" className="yunsuan3">1</a>
      							<a href='' className="yunsuan4">-</a>
      							<span className="yunsuan5">75</span>
      							<a href="" className="yunsuan6">X</a>
      						</div>
      					</div>
      				</div>
      			</div>
      			<div className="down">
      				<div className="down_left">
      					<div><input type="checkbox" className="Allcheck" /></div>
      					<div><span className="choose">全选</span></div>
      					<div ><i className="iconfont font" >&#xe627;</i><a href="" className="delete">删除</a></div>
      					<div><span className="line">|</span><span>共<span className="yellow">2</span>件商品,
      					已选择<span className="yellow">1</span>件</span></div>
              <div className="price"><span>合计：</span><br />
      					<span>[不包含运费]</span></div>
      					<div><span className="num">75</span></div>
      				</div>
      				<div className="down_right">
      					<a href='' className="jiesuan">去结算</a>
      				</div>
      			</div>


      	</div>
      </div>
    )
  }
}

export default Shoppingcar
