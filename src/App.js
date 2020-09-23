import React, { Component } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import { Transition, animated } from "react-spring/renderprops";
import BlogCard from "./components/BlogCard";
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

  componentDidMount() {
    let blog;
    if (localStorage.getItem("blog") === null) {
      blog = ["empty"];
    } else {
      const blogCon = JSON.parse(localStorage.getItem("blog"));
      this.setState({ blogs: this.state.blogs.concat(blogCon) });
    }
  }
  clickBtn = () => {
    this.setState({ isClicked: true });
    if (this.state.isClicked === true) {
      this.setState({ isClicked: false });
    }
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

    localStorage.setItem("blog", JSON.stringify(this.state.blogs));
  }
  deleteBtn = (id) => {
    this.setState({
      blogs: [...this.state.blogs.filter((blog) => blog.id !== id)],
    });
  };
  deleteLocal = () => {
    localStorage.removeItem("blog");
    this.setState({ blogs: [] });
  };
  // getLocal = () => {
  //   let x = localStorage.getItem("blog");
  //   console.log(x);
  // };
  render() {
    return (
      <div className="App">
        <Header
          click={this.state.isClicked}
          btn={this.clickBtn}
          delLocal={this.deleteLocal}
        />
        <Transition
          native
          items={this.state.isClicked}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(show) =>
            show &&
            ((props) => (
              <animated.div style={props}>
                <Input
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  handleContent={this.handleContent}
                />
              </animated.div>
            ))
          }
        </Transition>
        <BlogCard blogs={this.state.blogs} deleteBtn={this.deleteBtn} />
      </div>
    );
  }
}
export default App;
