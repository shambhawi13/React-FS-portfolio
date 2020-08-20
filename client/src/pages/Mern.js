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

const project2 = {
  title: 'Weather Dashboard',
  subheader: 'Forecast',
  image: Weather,
  shortDesc: 'As a user, I can visit this application to view wheather report of selected cities and save cities for future reference. Project is built with technologies like HTML, CSS, Bootstrap, Javascript, JQuery, Lodash, 3rd party APIs',
  longDesc1: `I can get the following details: `,
  longDesc2: `- Retrieve priviously saved weather details of the cities I have searched. It uses
  localStorage behind the scene to keep record of cities. `,
  longDesc3: `I can get forecast of next 5 days and multiple cities can be save for future reference.`,
  longDesc4: `Used OpenWeather API to retrieve weather data.`,
  gitLink: 'https://github.com/shambhawi13/Weather-Dashboard',
  liveLink: 'https://shambhawi13.github.io/Shoppinator/'
};

const project3 = {
  title: 'JS Quiz Game',
  subheader: 'Fun game',
  image: Quiz,
  shortDesc: 'This application is written in pure Javascript, HTML, CSS and Bootstrap which is a five minutes timer based quiz application. You get points for each correct answer and reduces time for each wrong answer. ',
  longDesc1: `10 questions with 4 option. Any one of the options are correct. You get 5 minutes to answer all question.`,
  longDesc2: `One correct answers gets you 10 points. One wrong answer lowers your score by 5 points and deducts timer by 10sec. `,
  longDesc3: `If you dont know the anwer of a question, you can goto next question by clicking
  "Next" Button.`,
  longDesc4: `If you want to review any answered question, you can click "Prev" button. After 5 min is over, you get to see total score. Enter the initials to save the
      score.`,
  gitLink: 'https://github.com/shambhawi13/quiz-game',
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

function Mern() {
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

export default Mern;