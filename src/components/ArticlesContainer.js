import React from 'react'

import { Article } from '../components'

export default class ArticlesContainer extends React.Component {
  constructor () {
    super ()
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Article />
      </div>
    )
  }
}
