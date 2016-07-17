import React from 'react';
import AppBar from 'material-ui/AppBar';

const headerStyle = {
  position: 'fixed',
  backgroundColor: '#00a087',
  paddingTop: 15,
  top: 0,
  left: 0,
  right: 0,
  height: 100,
};

class Header extends React.Component {
  render() {
    return(
      <div>
      <AppBar
        title="Colossal News Feed"
        style={headerStyle}
        showMenuIconButton={false}
        />
      </div>
    );
  }
}

export default Header;
