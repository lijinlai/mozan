import React , { Component } from 'react'
import './banner.css'
import first from '../images/1.jpg'
import second from '../images/2.jpg'
import third from '../images/3.jpg'

class Banner extends Component{
  render() {
    return(
      <div className="banner">
        <img src={first} alt=""/>
        <img src={second} alt=""/>
        <img src={third} alt=""/>
      </div>
    )
  }
}

export default Banner
