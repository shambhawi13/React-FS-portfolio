import React from "react";
import ReviewCard from '../components/Card/Card';
import SpoilerAlert from '../Assets/spoiler-alert.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Readme from '../Assets/readme.png';
import Bucketlist from '../Assets/bucket-list.png';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useHistory } from 'react-router-dom';

const project1 = {
  title: 'Spoler Alert',
  subheader: 'Food inventory app',
  image: SpoilerAlert,
  shortDesc: 'Spoiler Alert! is a food inventory and status tracking application. Project is built with technologies like HTML, CSS, Bootstrap, Javascript, JQuery, Lodash, MtSQL,Sequelize, node, express',
  longDesc1: `Users can sign-in to
  view
  items, add items, update item quantities, and remove items from their refrigerator. When
  items near their expiration date, Spoiler Alert! will send an alert to the user’s email
  informing him/her of the item that is near expiration. `,
  gitLink: 'https://github.com/shambhawi13/Refritrack',
  liveLink: 'https://shambhawi13.github.io/Shoppinator/'
};

const project2 = {
  title: 'ReadMe-Generator',
  subheader: 'for developers',
  image: Readme,
  shortDesc: 'Node application to generate readme for developers who can use it to automatically generate markdown file for projects by answering few questions. Project is built with technology like Node',
  longDesc1: `This is a node application that generates readme just by providing set of questions asked
  by user. The application takes care of retrieving user avatar and email by hitting
  github api using axios. It also validates and remove the section which is not given by
  user.`,
  gitLink: 'https://github.com/shambhawi13/Weather-Dashboard',
  liveLink: 'https://shambhawi13.github.io/Shoppinator/'
};

const project3 = {
  title: 'Bucket List',
  subheader: 'Fun game',
  image: Bucketlist,
  shortDesc: 'An application that can be used to keep a note of user bucketlist. Technology involved : HTML, CSS, JavaScript Bootstrap, Node, Express, MySQL, Sequelize as ORM',
  longDesc1: `An application that can be used to keep a note of user's bucketlist.`,
  longDesc2: `- Add item to bucketlist
  - Update the list from todos to completed list.
  - If user wants to remove item from bucketlist, there is a delete option available.
  - View all items added to bucketlist`,
  gitLink: 'https://github.com/shambhawi13/Bucketlist',
  liveLink: 'https://shambhawi13.github.io/Shoppinator/'
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Node() {
  const classes = useStyles();
  let history = useHistory();

  const navigateToPortfolio = ()=>{
    history.push('/dashboard');
  }

  return (
    <Container>
       <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          className={classes.margin}
          onClick={() => navigateToPortfolio()}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Navigate back to Portfolio
        </Fab>
      <div spacing={3}>
        <Grid container
          alignItems="center"
          direction="row"
          justify="center">
          {/* <Grid item sm={0} md={1}>
        </Grid> */}
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <ReviewCard project={project1} spacing={2} ></ReviewCard>
            </Paper>

          </Grid>
          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <ReviewCard project={project2} spacing={2}></ReviewCard>
            </Paper>
          </Grid>

          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <ReviewCard project={project3} spacing={2}></ReviewCard>
            </Paper>
          </Grid>
          {/* <Grid item sm={0} md={1}>
        </Grid> */}
        </Grid>

      </div>
    </Container>
  );
}

export default Node;