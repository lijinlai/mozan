import React , { Component } from 'react'
import './header.css'
import log from '../images/log.jpg'
import menu from '../images/menu.svg'
import shop from '../images/shop.svg'
import sousuo from '../images/sousuo.svg'



class Header extends Component{
  render() {
    return(
      <div className="warp">
        <header>
          <div className="top">
            <img src={menu} alt=""/>
            <img src={log} alt="" />
            <img src={sousuo} alt=""/>
            <img src={shop} alt=""/>
          </div>
        </header>

      </div>
    )
  }
}

export default Header
