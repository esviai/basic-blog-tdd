import React from 'react'

import { Menu } from './components'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Basic Blog TDD with Jest</h1>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
