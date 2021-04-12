import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Comment from "./Comment";
import InputArea from "./InputArea";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const comments = [
    { id: 1,
      name:'FDKLGJDFILGJ ',
    body:'Ut do veniam consequat exercitation laborum. Exercitation Lorem id aute velit minim sunt fugiat labore eiusmod exercitation velit consequat. Deserunt veniam veniam Lorem elit elit et aliqua. Ipsum mollit eiusmod velit sint aliqua sunt fugiat pariatur labore incididunt laborum ea qui quis. Ipsum nostrud nostrud deserunt sunt nisi voluptate ex reprehenderit duis. Exercitation culpa eiusmod est eu ex pariatur et id id commodo proident. Qui ex est consequat proident nulla tempor esse exercitation laborum non velit eu.',
    email: 'hello@world.com'},
    { id: 2,
      name:'Name2',
    body:'Consectetur irure adipisicing qui irure occaecat et qui anim quis sit eu excepteur pariatur. Esse minim id labore dolor quis irure ex et esse. Quis non ex proident consectetur sit laboris. Sint laborum adipisicing Lorem qui sit cupidatat. Officia magna nostrud duis occaecat id consequat consectetur tempor est sint occaecat.',
    email: 'hello@world.com'},
    { id: 3,
      name:'Name3',
    body:'Reprehenderit elit irure magna eiusmod voluptate. Ea cupidatat do deserunt irure voluptate est non proident excepteur aliquip. Lorem ea amet irure sit quis ad qui officia id sit cupidatat. Irure incididunt enim est est incididunt aliquip occaecat qui ipsum nostrud velit sint ut duis.Minim nisi aute deserunt proident magna non nulla labore laborum quis. Excepteur proident incididunt est ea deserunt adipisicing dolor sint officia laboris labore. Ipsum velit nisi deserunt voluptate veniam. Ut tempor minim cillum anim laborum cupidatat dolor eu anim dolor voluptate. Enim non elit non incididunt occaecat nulla commodo.Reprehenderit non ex culpa ex tempor deserunt laboris tempor amet. Culpa consequat magna excepteur voluptate dolor laboris ullamco voluptate dolor aliquip est duis. Fugiat magna cupidatat dolor incididunt proident cupidatat.',
    email: 'hello@world.com'},]

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="UserName"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FP6A-wjuyF-Y%2Fmaxresdefault.jpg&f=1&nofb=1"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This is a post. Test test test hello. hello. hello.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like post">
          <Badge badgeContent={4} color="primary">
            <ThumbUpIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="dislike post">
        <Badge badgeContent={4} color="primary">
          <ThumbDownIcon />
          </Badge>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <InputArea />
          <Comment comments={comments}/>
        </CardContent>
      </Collapse>
    </Card>
  );
}
