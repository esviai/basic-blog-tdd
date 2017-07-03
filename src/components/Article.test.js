import React from 'react'
import { shallow } from 'enzyme'

import Article from './Article'

describe('Article component', () => {
  it('renders correctly', () => {
    const articleWrapper = shallow(<Article />)
    expect(articleWrapper).toHaveLength(1)
  })
})
