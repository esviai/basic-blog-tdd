import React from 'react'

export default class Menu extends React.Component {
  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Articles
        </p>
        <ul className="menu-list">
          {this.props.articles.map((article, index) => {
            return (
              <li key={index}>{article.title}</li>
            )
          })}
        </ul>
        <p className="menu-label">
          Users
        </p>
        <ul className="menu-list">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </aside>
    )
  }
}
