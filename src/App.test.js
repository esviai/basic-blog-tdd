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
  it('renders a <Menu> component', () => {
    const appWrapper = shallow (<App />)
    const menuWrapper = appWrapper.find('Menu')
    expect(menuWrapper).toHaveLength(1)
  })
  //  it('renders a <NewPost> component', () => {
  //    const appWrapper = shallow (<App />)
  //    const newFormWrapper = appWrapper.find('NewForm')
  //    expect(newFormWrapper).toHaveLength(1)
  //  })
  it('renders a <ArticlesContainer> component', () => {
    const appWrapper = shallow (<App />)
    const articlesContainerWrapper = appWrapper.find('ArticlesContainer')
    expect(articlesContainerWrapper).toHaveLength(1)
  })

  // === STATE ===
  it('has articles state', () => {
    const appWrapper = shallow(<App />)
    const articlesState = appWrapper.state('articles')
    expect(articlesState).toBeDefined()
  })
  it('has two articles', () => {
    const appWrapper = shallow(<App />)
    const articlesState = appWrapper.state('articles')
    expect(articlesState).toHaveLength(2)
  })
  it('has article as an object', () => {
    const appWrapper = shallow(<App />)
    const articlesState = appWrapper.state('articles')
    const isArticleAnObject = typeof  articlesState[0] === 'object'
    expect(isArticleAnObject).toBeTruthy()
  })

  // === EVENTS ===
  it('opens form to submit new article', () => {
    const appWrapper = shallow(<App />)
    appWrapper.instance().openNewPost()
    const isNewPostState = appWrapper.state('isNewPost')
    expect(isNewPostState).toBeTruthy()
  })
  it('opens form when "New Post" button is clicked', () => {
    const appWrapper = shallow(<App />)
    const newPostButton = appWrapper.find('#newPost-btn')
    newPostButton.simulate('click')
    const isNewPostState = appWrapper.state('isNewPost')
    expect(isNewPostState).toBeTruthy()
  })
  it('add new articles', () => {
    const newArticle = {
      title: 'Life Must Go On',
      content: 'Berakit-rakit kita ke hulu, berenang kita ke tepian. Bersakit dahulu, senang pun tak datang. Malah mati kemudian.',
      author: 'Shabrina V. Inmas',
    }
    const appWrapper = shallow(<App />)
    appWrapper.instance().submitNewPost(newArticle)
    const articlesState = appWrapper.state('articles')
    expect(articlesState).toHaveLength(3)
  })
  // Seems like it's impossible to do the following test in parent, because of shallow rendering. The following doesn't work, so good luck finding another way!
  //it('add new articles when "Submit" button is clicked', () => {
  //  const appWrapper = shallow(<App />)
  //  const submitButton = appWrapper.find('NewForm').find('#submit-btn')
  //  submitButton.simulate('click')
  //  const articlesState = appWrapper.state('articles')
  //  expect(articlesState).toHaveLength(3)
  //})

})
