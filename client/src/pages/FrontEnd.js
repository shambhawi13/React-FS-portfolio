import React, { useEffect } from "react";
import ReviewCard from '../components/Card/Card';
import Shoppinator from '../Assets/shoppinator.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


const project1 = {
  title: 'Shoppinator',
  subheader: 'One stop shop',
  image: Shoppinator,
  shortDesc: 'Shoppinator simplifies the search experience and creates a one-stop location for everything. Project is built with technologies like HTML, CSS, Bootstrap, Javascript, JQuery, Lodash, 3rd party APIs',
  longDesc1: `- Instead of searching each item and tracking on personal notes, Shoppinator creates a
  platform to help users to just give the link to the image of his choice. eg: a
  workplace/livingspace and we will take care of processing the image and suggesting users
  of different items that he would like to buy. `,
  longDesc2: ` - Users need not track and search items one by one. `,
  longDesc3: `- It provides detail on both online purchase as well as nearby stores based on the
  user's choice.`,
  gitLink: 'https://github.com/shambhawi13/Shoppinator',
  liveLink: 'https://shambhawi13.github.io/Shoppinator/'
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function FrontEnd() {
  const classes = useStyles();

  return (
    <Container>
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
              <ReviewCard project={project1} spacing={2}></ReviewCard>
            </Paper>
          </Grid>

          <Grid item sm={12} md={4}>
            <Paper className={classes.paper}>
              <ReviewCard project={project1} spacing={2}></ReviewCard>
            </Paper>
          </Grid>
          {/* <Grid item sm={0} md={1}>
        </Grid> */}
        </Grid>

      </div>
    </Container>
  );
}

export default FrontEnd;