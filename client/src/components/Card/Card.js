import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 100 + '%',
    height: 100 + '%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ReviewCard({project}) {
    
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let {title,subheader,image,shortDesc,longDesc1,longDesc2,longDesc3,gitLink,liveLink,longDesc4} = project;

  const handleExpandClick = () => {
    console.log(title,subheader);
    setExpanded(!expanded);
  };

  const navigateToGithub= ()=>{
    window.location.href = gitLink ;
  }

  const navigateToLive = ()=>{
    window.location.href =  liveLink ;
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDesc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="github" onClick={navigateToGithub}>
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="live" onClick={navigateToLive}>
          <CloudQueueIcon />
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
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {longDesc1}
          </Typography>
          <Typography paragraph>
            {longDesc2}
          </Typography>
          <Typography paragraph>
            {longDesc3}
          </Typography>
          <Typography>
            {longDesc4}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
