import React, { Component } from 'react'

export class NewsComponents extends Component {
  render() {
    let {title,description,url,pageUrl,author,date,name} = this.props
    return (
        <div className="col mb-4">
        <div className="card">
          <img src={url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <span class="badge badge-danger my-2">{name}</span>    
            <p className="card-text"><small className="text-muted">By {author===null?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={pageUrl} target= {'_blank'}className="btn btn-dark">Click for more...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsComponents