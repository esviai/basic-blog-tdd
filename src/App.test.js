import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'

//it('renders without crashing', () => {
//  const div = document.createElement('div')
//  ReactDOM.render(<App />, div)
//})

describe('<App> component', () => {
  // === OUTPUT ===
  it('renders correctly', () => {
    const appWrapper = shallow (<App />)
    expect(appWrapper).toHaveLength(1)
  })

  // === STATE ===
  it('has articles state', () => {
    const appWrapper = shallow(<App />)
    const articlesState = appWrapper.state('articles')
    expect(articlesState).toBeDefined()
  })
  it('has article as an object', () => {
    const appWrapper = shallow(<App />)
    const articlesState = appWrapper.state('articles')
    const isArticleAnObject = typeof  articlesState[0] === 'object'
    expect(isArticleAnObject).toBeTruthy()
  })

})
