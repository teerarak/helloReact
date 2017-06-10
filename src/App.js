import React, { Component } from 'react'
import Header from './Header'
import Contents from './Contents'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div className="row">
        <div className="col s12 m6">
            <div className="card blue-grey">
                <div className="card-content white-text">
                    <span className="card-title"><Header/></span>
                    <Contents firstName='Teerarak' lastName='Saipong' age='21' />
                </div>
                <div class="card-action">
                    <Footer/>
                </div>
            </div>     
        </div>
      </div>
    )
  }
}
export default App
