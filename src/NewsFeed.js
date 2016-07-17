import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import NewsItem from './NewsItem';
import FancyTitle from './styles/FancyTitle';
import RefreshIndicator from 'material-ui/RefreshIndicator';

var Masonry = require('react-masonry-component');

var masonryOptions = {
    transitionDuration: 0
};

// import {containerStyle} from './styles/containers';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const grid = {
  float: "left",
};

class NewsFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Loading...",
      newsItems: [],
      loading: true
    };

  }

  componentDidMount() {
    window.setTimeout(this.loadNews.bind(this), 1000);
    // this.loadNews();
  }

  loadNews() {
    let url = this.props.url;
    let component = this;

    $.ajax({
       type: "GET",
       url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
       dataType: 'json',
       error: function(){
         console.log('Unable to load feed, Incorrect path or invalid feed');
       },
       success: function(xml){
         component.setState({
           title: xml.responseData.feed.title,
           newsItems: xml.responseData.feed.entries,
           loading: false
         });
       }
     });
  }

  renderNewsItem(item, index) {
    // Get the image from the HTML content snippet
    var content = $("<div/>").html(item.content);
    var image = $("img", content).attr("src");

    return (
      <NewsItem
        key={index}
        item={item}
        image={image}
        link={item.link} />
    );
  }

  renderList() {
    let title = this.state.title;
    let newsItems = this.state.newsItems;
    let category = this.props.category;

    if(category){
      newsItems = _.filter(newsItems, function(item){
      return _.includes(item.categories,category);
       });
    }

    return (
      // <div style={containerStyle}>
      <div>
        <FancyTitle label={title} />
        <div>
          <Masonry>
            {newsItems.map(this.renderNewsItem.bind(this))}
          </Masonry>  
        </div>
      </div>
    );
  }

  renderLoading() {
    return(
      <RefreshIndicator
        top={100}
        left={window.innerWidth / 2 - 50}
        size={100}
        loadingColor={"#FF9800"}
        status="loading" />
    );
  }

  render() {
    // alert(this.props.category);
    if (this.state.loading) {
      return this.renderLoading();
    }

    return this.renderList();
  }
}

export default NewsFeed;
