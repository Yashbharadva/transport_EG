import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
 
class MyComponent extends Component {
  handleClickOutside = e => {
      this.props.handleClickOutside(e);
  };
  render() {
      return this.props.children;

  }
}
 
export default onClickOutside(MyComponent);
// export default onClickOutside(MyComponent);