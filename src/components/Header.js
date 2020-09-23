import React, { Component } from "react";
import logo from "./logo.svg";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <IconButton
            aria-label="delete"
            onClick={this.props.delLocal}
            className="delBtn"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
          <img style={styleImg} className="header-logo" src={logo} alt="logo" />
          <h1>React Blog</h1>
          <Button
            variant="contained"
            className="addBtn"
            color="primary"
            onClick={this.props.btn}
          >
            {this.props.click ? "-" : "+"}
          </Button>
        </header>
      </div>
    );
  }
}
const styleImg = {
  height: "50px",
  width: "50px",
};
