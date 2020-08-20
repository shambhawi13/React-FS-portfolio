import React from "react";
import ReviewCard from '../components/Card/Card';
import Shoppinator from '../Assets/shoppinator.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Weather from '../Assets/weather-image.png';
import Quiz from '../Assets/quiz.jpg';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useHistory } from 'react-router-dom';
import Clicky from '../Assets/clicky.gif';
import Emp from '../Assets/emp-directory.gif';
import ReactImg from '../Assets/React.jpg'

const project1 = {
  title: 'Clicky Game',
  subheader: 'Memory game',
  image: Clicky,
  shortDesc: 'This is a memory game. Project is built with technologies like HTML, CSS, Bootstrap, Javascript, React',
  longDesc1: `- Instead of searching each item and tracking on personal notes, Shoppinator creates a
  platform to help users to just give the link to the image of his choice. eg: a
  workplace/livingspace and we will take care of processing the image and suggesting users
  of different items that he would like to buy. `,
  longDesc2: ` - Users need not track and search items one by one. `,
  longDesc3: `- It provides detail on both online purchase as well as nearby stores based on the
  user's choice.`,
  gitLink: 'https://github.com/shambhawi13/Clicky-Game',
  liveLink: 'https://shambhawi13.github.io/Clicky-Game/'
};

const project2 = {
  title: 'Employee Directory',
  subheader: 'Employee management system',
  image: Emp,
  shortDesc: 'As a manager, use app to keep track of employee records. Project is built on React',
  longDesc1: `An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.Given a table of random users, when the user loads the page, a table of employees should render. The user should be able to:

  Sort the table by at least one category
  Filter the users by at least one property. `,
  gitLink: 'https://github.com/shambhawi13/Employee-directory',
  liveLink: 'https://shambhawi13.github.io/Shoppinator/'
};

const project3 = {
  title: 'React Portfolio',
  subheader: 'This portfolio',
  image: ReactImg,
  shortDesc: 'Walk through this application. Project is built on React, Node, express, MongoDB, Mongoose',
  longDesc1: `Walk through this application`,

  gitLink: 'https://github.com/shambhawi13/React-based-portfolio',
  liveLink: 'https://github.com/shambhawi13/React-based-portfolio'
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

function ReactCmp() {
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

export default ReactCmp;