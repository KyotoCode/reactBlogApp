import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { render } from "@testing-library/react";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function BlogCard(props) {
  const classes = useStyles();
  console.log(props.blogs);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        justifyContent: "center",
      }}
    >
      {props.blogs.map((blog) => (
        <div key={blog.id} style={{ margin: "20px" }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {blog.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

// export default class BlogCard extends Component {
//   render() {
//     // console.log(this.props.title);
//     // const title = this.props.title;

//     return (
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           margin: "10px",
//           justifyContent: "space-around",
//         }}
//       >
//         <Card style={{ marginTop: "20px" }}>
//           <CardActionArea>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2"></Typography>
//               {/* {title} */}
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Lizards are a widespread group of squamate reptiles, with over
//                 6,000 species, ranging across all continents except Antarctica
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions style={{ display: "flex", justifyContent: "center" }}>
//             <Button size="small" color="primary">
//               Share
//             </Button>
//             <Button size="small" color="primary">
//               Learn More
//             </Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }
