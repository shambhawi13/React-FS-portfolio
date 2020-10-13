import React from "react";
import ReviewCard from '../components/Card/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import SpoilerAlert from '../Assets/spoiler-alert.png';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useHistory } from 'react-router-dom';
import shoppr from '../Assets/shoppr.jpg';
import ebook from '../Assets/e-book.png';

const project1 = {
  title: 'Shoppr',
  subheader: 'AI based social shopping',
  image: shoppr,
  shortDesc: 'This React/Node.js app utilizes the the AI based image recognition capabilities of the GoogleVision API and makes shopping a fun, easy and social',
  longDesc1: `- With Shoppr you can connect with your friends and find out if they buy similar items to what you are searching for, so if they have already purchased that item, we can get their opinion about it. `,
  longDesc2: ` - Users need not track and search items one by one. `,
  longDesc3: `- It provides detail on both online purchase as well as nearby stores based on the
  user's choice.`,
  gitLink: 'https://github.com/shambhawi13/Shoppr',
  liveLink: 'https://shoppr-ai.herokuapp.com/'
};

const project2 = {
  title: 'Spoler Alert',
  subheader: 'Food inventory app',
  image: SpoilerAlert,
  shortDesc: 'Spoiler Alert! is a food inventory and status tracking application. Project is built with technologies like HTML, CSS, Bootstrap, Javascript, JQuery, Lodash, MySQL,Sequelize, node, express',
  longDesc1: `Users can sign-in to view
  items, add items, update item quantities, and remove items from their refrigerator. When
  items near their expiration date, Spoiler Alert! will send an alert to the user’s email
  informing him/her of the item that is near expiration. `,
  gitLink: 'https://github.com/shambhawi13/Refritrack',
  liveLink: 'https://shambhawi13.github.io/Shoppinator/'
};

const project3 = {
  title: 'E-Book',
  subheader: 'Google Book References',
  image: ebook,
  shortDesc: 'If you are looking for e-books, we provide you with one stop book store. This application utilizes Google Book API to serve you reading desire. You can save and delete books in your library.',
  longDesc1: `Full Stack MERN application to search for books from the Google Book API, and store them in a Mongo database.`,
  longDesc2: `This application is built using react, mongodb, mongoose, node.`,
  gitLink: 'https://github.com/shambhawi13/Google-book-search',
  liveLink: 'https://books-google-search.herokuapp.com/'
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

function FullStack() {
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

export default FullStack;