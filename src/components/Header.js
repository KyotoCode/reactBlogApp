import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>React Blog</h1>
          <Button
            variant="contained"
            className="addBtn"
            color="primary"
            onClick={this.props.btn}
          >
            {this.props.click ? "-" : "+"}
          </Button>
          {console.log(this.props.click)}
        </header>
      </div>
    );
  }
}
