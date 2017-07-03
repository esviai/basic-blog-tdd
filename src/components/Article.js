import React from 'react'

export default class Article extends React.Component {

  render () {
    return (
      <div>
        {this.props.articles.map((article, index) => {
          return (
            <section key={index} className="hero">
              <br />
              <div className="hero-head">
                <h1 className="title">{article.title}</h1>
              </div>
              <div className="hero-body">
                {article.content}
              </div>
              <div className="hero-foot">
                <p className="subtitle">Author: {article.author}</p>
              </div>
              <br />
              <br />
            </section>
          )
        })}
      </div>
    )
  }
}
