import React from 'react';

const fancyTitleBaseStyle = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '800',
  fontSize: '4rem'
};

class FancyTitle extends React.Component {
  render() {
    return(
      <h1 style={fancyTitleBaseStyle}>
        {this.props.label}
      </h1>
    );
  }
}

export default FancyTitle;
