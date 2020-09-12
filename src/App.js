import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import BlogCard from "./components/BlogCard";
// import Testspring from "./components/Testspring";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      blogs: [],
      text: "",
      content: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }
  clickBtn = () => {
    this.setState({ isClicked: true });
    if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
    }
    console.log(this.state.isClicked);
  };

  handleChange = (event) => {
    // this.setState({ text: [...this.state.text, { text: event.target.value }] });
    this.setState({ text: event.target.value });
  };
  handleContent = (event) => {
    // this.setState({ text: [...this.state.text, { text: event.target.value }] });
    this.setState({ content: event.target.value });
  };
  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      title: this.state.text,
      content: this.state.content,
      id: Date.now(),
    };
    this.setState((state) => ({
      blogs: state.blogs.concat(newItem),
      text: "",
      content: "",
    }));
  }
  render() {
    console.log(this.state.text);
    return (
      <div className="App">
        <Header click={this.state.isClicked} btn={this.clickBtn} />
        <Input
          click={this.state.isClicked}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleContent={this.handleContent}
        />
        <BlogCard blogs={this.state.blogs} />
        {/* <Testspring /> */}
      </div>
    );
  }
}
export default App;
