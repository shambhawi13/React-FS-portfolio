import React from "react";
import ReviewCard from '../components/Card/Card';
import fidelity from '../Assets/fidelity.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import gcn from '../Assets/gcn.png';
import splunk from '../Assets/splunk.png';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useHistory } from 'react-router-dom';

const project1 = {
  title: 'Splunk Service Portal',
  subheader: 'Client: Apple',
  image: splunk,
  shortDesc: 'Web application built for automating project-specific configurations for other teams that rely upon to build their products, services. Dynamic UI based on Angular that changes on configuration change.',
  longDesc1: `Responsibilities:
  Design and brainstorm front-end solutions to map business requirements.
  Develop user interactive, dynamic, modularised, and reusable components.
  Test and deploy the application. Provide end to end UI solution. `,
  longDesc2: `- Front-end is developed in Angular 5
  and the backend in Python which takes care of all APIs and automation.`,
  longDesc3: ` - Client : Apple `,
  gitLink: '#',
  liveLink: '#'
};

const project2 = {
  title: 'Game Changer Networks',
  subheader: 'Client: Electronic Arts',
  image: gcn,
  shortDesc: 'A web application that provides measurable results of Community-driven influencer outreach. The project consisted of two applications: One for game changers built in Angular and another for the operation specialist built-in React.',
  longDesc1: `Responsibilities: 
  Developed modularized responsive application using lazy loading features and life cycle hooks.
  Implemented custom directives and components to create re-usable functionalities.
  Worked on a unit test framework, Jasmine, to test services and model level data and functionalities. `,
  longDesc2: `Technologies: Angular 6.x, React 16.x Bootstrap 4, SASS, HTML5, Lodash, Docker`,
  longDesc3: `Client: Electronic Arts`,
  gitLink: '#',
  liveLink: '#'
};

const project3 = {
  title: 'ECP( Equity Compensation Planning)',
  subheader: 'Client: Fidelity Investment',
  image: fidelity,
  shortDesc: 'Single page web application designed for financial representatives. It generates detailed historical information on all public and private shares of its customers and creates an analysis report.',
  longDesc1: `Responsibilities:
  Design and implementation of single-page web application using Angular, Bootstrap, HTML, CSS3.
  Created stock analysis report, depicted by various interactive charts like donut-chart, simple and stacked bar-charts, line-charts using HighCharts.
  Led the frontend team and reviewed all UI code change before deployment. Project involves OAuth 2.0 protocol for authorization.`,
  longDesc2: `Technologies: AngularJs 1.5.5, NodeJs, Bootstrap,HTML, CSS, SASS, Lodash, Highcharts`,
  longDesc3: `Client: Fidelity Investments`,
  gitLink: '#',
  liveLink: '#'
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

function Angular() {
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

export default Angular;