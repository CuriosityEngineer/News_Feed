import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';


class NewsItem extends React.Component {
  constructor(){
    super();

    this.grid = {
      float: "left",
      width: "31%",
      margin: "10"
    };
  }

  render() {
    return (
      <div style={this.grid}>
        <Card>
          <CardHeader
            title={this.props.item.author}
          />
          <CardMedia
            overlay={<CardTitle title={this.props.item.title}  />}
          >
            <img src={this.props.image} />
          </CardMedia>
          <CardText dangerouslySetInnerHTML={{__html: this.props.item.contentSnippet}}>

          </CardText>
          <CardActions>
            <RaisedButton label="Read" primary={true} linkButton={true} href={this.props.link} />
            {this.props.item.categories.map((category) => {
              return (<Link to={category}><FlatButton label={category}/></Link>);
            })}
          </CardActions>
        </Card>

      </div>
    );
  }
}

export default NewsItem;
