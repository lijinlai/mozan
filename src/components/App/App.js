import React,{ Component } from 'react'
import './app.css'
import Layout from '../Layout/Layout'
import Main from '../Main/Main'
// import Shopone from '../Shopone/Shopone'
// import Shoppingcar from '../Shoppingcar/Shoppingcar'
class App extends Component{
  render(){
    return (
      <div className='app'>
        <Layout>
        <Main />
        </Layout>
      </div>
    )
  }
}
export default App
