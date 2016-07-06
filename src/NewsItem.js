import React from 'react';

class NewsItem extends React.Component {
  render(){
    console.log(this.props);

    return(
      <div>
        <h2> {this.props.title} </h2>
          <p><img src={this.props.image}/></p>
          <p>{this.props.description}</p>
          <p>{this.props.author}</p>
          <p><a href={this.props.link}>Read Article</a></p>
      </div>
    );
  }
}
export default NewsItem;
