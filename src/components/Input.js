import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import React from "react";

export default function Input(props) {
  return (
    <div className="input" style={{ display: props.click ? "flex" : "none" }}>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="titleIn"
          onChange={props.handleChange}
        />
        <textarea
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className="textIn"
          onChange={props.handleContent}
        />
        <Button
          variant="contained"
          color="default"
          className="btnUp"
          type="submit"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      </form>
    </div>
  );
}

// export default class Input extends Component {
//   //this.setstate({title: e.target.value})
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     title: "",
//   //     blog: "",
//   //   };
//   //   this.onSubmit = this.onSubmit.bind(this);
//   // }
//   // onChange = (e) => {
//   //   e.preventDefault(e);
//   //   this.setState({
//   //     title: e.target.value,
//   //   });
//   // };
//   // onChangeBlog = (e) => {
//   //   e.preventDefault(e);
//   //   this.setState({
//   //     blog: e.target.value,
//   //   });
//   // };
//   // onSubmit = (e) => {
//   //   e.preventDefault(e);
//   //   this.props.addTitle({ title: this.state.title });
//   //   this.setState({
//   //     title: "",
//   //   });
//   // };
//   render() {
//     return (
//       <div
//         className="input"
//         style={{ display: this.props.click ? "flex" : "none" }}
//       >
//         <form onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             placeholder="Title"
//             className="titleIn"
//             // value={this.state.title}
//             onChange={this.onChange}
//           />

//           <textarea
//             id="outlined-basic"
//             label="Outlined"
//             variant="outlined"
//             className="textIn"
//             // value={this.state.blog}
//             onChange={this.onChangeBlog}
//           />
//           <Button
//             variant="contained"
//             color="default"
//             className="btnUp"
//             type="submit"
//             startIcon={<CloudUploadIcon />}
//           >
//             Upload
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }
