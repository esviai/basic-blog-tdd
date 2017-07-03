import React from 'react'

export default class NewForm extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      title: null,
      content: null,
      author: null,
    }
  }
  setTitle (title) {
    this.setState({
      title: title
    })
  }
  setContent (content) {
    this.setState({
      content: content
    })
  }
  setAuthor (author) {
    this.setState({
      author: author
    })
  }
  render () {
    return (
      <div>
        <div className="field">
          <label className="label">Title</label>
          <p className="control">
            <input onChange={(e) => this.setTitle(e.target.value)} className="input" type="text" placeholder="Title" />
          </p>
        </div>
        <div className="field">
          <label className="label">Content</label>
          <p className="control">
            <input onChange={(e) => this.setContent(e.target.value)} className="input" type="text" placeholder="Content" />
          </p>
        </div>
        <div className="field">
          <label className="label">Author</label>
          <p className="control">
            <input onChange={(e) => this.setAuthor(e.target.value)} className="input" type="text" placeholder="Author" />
          </p>
        </div>
        <a id="submit-btn" className="button is-dark is-bold" onClick={()=> this.props.handleForm(this.state)}>Submit</a>
        <a className="button is-light is-bold" onClick={()=> this.props.closeForm()}>Cancel</a>
      </div>
    )
  }
}
