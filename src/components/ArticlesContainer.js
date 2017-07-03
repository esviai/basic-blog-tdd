import React from 'react'

import { Article } from '../components'

export default class ArticlesContainer extends React.Component {
  render () {
    return (
      <div>
        <Article articles={this.props.articles}/>
      </div>
    )
  }
}
