import React from 'react'
import { shallow } from 'enzyme'

import ArticlesContainer from './ArticlesContainer'

describe('ArticlesContainer component', () => {
  it('renders correctly', () => {
    const articlesContainerWrapper = shallow(<ArticlesContainer />)
    expect(articlesContainerWrapper).toHaveLength(1)
  })
  it('has article items', () => {
    const articlesContainerWrapper = shallow(<ArticlesContainer />)
    expect(articlesContainerWrapper.find('Article')).toHaveLength(1)
  })
})
