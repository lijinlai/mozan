import React , { Component } from 'react'
import './footer.css'
import erweima from '../images/erweima_03.jpg'
import log from '../images/log.jpg'



class Footer extends Component{
  render() {
    return(
      <footer>
  			<div className="footer_inner">
  				<div className="fleft">
  					<p>帮助信息</p>
            <div className="list">
              <ul>
    						<li><i className="iconfont">&#xe602;</i><span>购物指南</span></li>
    						<li><i className="iconfont">&#xe66b;</i><span>支付方式</span></li>
    						<li><i className="iconfont">&#xe613;</i><span>配送方式</span></li>
    						<li><i className="iconfont">&#xe6d2;</i><span>售后服务</span></li>
    					</ul>
    					<ul>
    						<li><i className="iconfont">&#xe604;</i><span>服务中心</span></li>
    						<li><i className="iconfont">&#xe667;</i><span>关于我们</span></li>
    						<li><i className="iconfont">&#xe618;</i><span>免责条款</span></li>
    						<li><i className="iconfont">&#xe620;</i><span>友情链接</span></li>
    					</ul>
            </div>

  				</div>
  				<div className="fmid">
  				<p>关注我们</p>
          <div className="erweima">
            <img src={erweima} alt={erweima} />
  					<img src={erweima} alt={erweima} />
          </div>
          <div className="taobaoweixin">
            <span><i className="iconfont">&#xe60a;</i></span>
  					<span><i className="iconfont">&#xe603;</i></span>
          </div>

  				</div>
  				<div className="fright">
  					<p>客服热线</p>
            <div className="bigphone">
              <span><i className="iconfont">&#xe604;</i></span>
    					<div className="phone">
    						<span>400 113 5353</span><br />
    						<span>[周一至周五 9:00-18:00]</span>
            </div>

  					</div>
  				</div>
  			</div>
  			<div className="footer_bottom">
  				<img src={log} alt={log} />
  				<div className="copyright">
            <span>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</span>
            <br />
    				<span>地址：北京市朝阳区建国路93号院4号楼4层505</span>
  				</div>
  			</div>
  		</footer>
    )
  }
}

export default Footer
