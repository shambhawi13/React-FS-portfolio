import React, {useEffect, useState} from "react";
import parallex1 from "../Assets/parallex1.jpg";
import profile from "../Assets/profile.jpg"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "../App.css";
import Paper from '@material-ui/core/Paper';
import BarChart from '../components/BarChart/BarChart';
import Fab from '@material-ui/core/Fab';
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';
import resume from '../Assets/resume.pdf';
import shoppr from '../Assets/shoppr.jpg';
import spoiler from '../Assets/spoiler-alert.png';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "bisque",
    height: '350px'
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    position: 'fixed',
    top: theme.spacing(8),
    right: theme.spacing(2),
    zIndex: 4
  },
  role: {
    position: 'absolute',
    top: theme.spacing(8),
    left: theme.spacing(2),
    color: 'white',
  }
}));

const About = () => {
  const [offset, setOffset] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll)
    // return () => {
    //   window.removeEventListener("scroll", handleScroll)
    // }
  }, [])

  return (
    <div className="pattern-bgc">
      <div>
        <img style= {{
          height:30 +'em',width:100 + '%',
            transform: `translateY(${offset * 0.3}px)`,
          }}
        className=" parallex"
        alt="parallex"
         src={parallex1}></img>
      </div>
      <a href={resume} download>
        <Fab
            variant="extended"
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.margin, classes.fab}
          >
            <GetAppIcon className={classes.extendedIcon}></GetAppIcon>
            Download Resume
        </Fab>
      </a>
      <div className={classes.role}>
        <h2 style={{fontFamily: 'cursive'}}>Shambhawi Kumari</h2>
         <h3 style={{fontVariant: 'small-caps'}}> Full stack Engineer, passion for User Interface <br/> design and development </h3>
      </div>
        <Container >
              <Grid container className="wrap" style={{backgroundColor: "white"}}>
                <Grid item xs={12}>
                  <h1 className="header">Shambhawi Kumari</h1>
                </Grid>
                  <Grid item xs={12} md={3} className="image" style={{textAlign: "center"}}>
                      <img className="img-fluid shadow float-left" src={profile} alt="Profile picture"/>
                  </Grid>
                  <Grid item xs={12} md={9} className="content">
                      <p className="grey-text text-darken-3 lighten-3 about-para" >Hi..!!! I am a web
                          developer and this
                          is the
                          little corner on the internet that you can explore to know more about me. I am from India and
                          currently living in Santa Clara , California. I enjoy building everything from small
                          business sites to rich interactive web apps. I love to design and develop user friendly
                          interactive application. I have 5+ years of experience in the web development industry and I
                          look
                          forward to learn and explore more in this field. <br/>
                          If you are a business seeking a web presence or an employer looking to hire, you can get
                          in touch with me.</p>
                  </Grid>
                  <Grid item xs={12}>
                    <BarChart></BarChart>
                  </Grid>
              </Grid>
        </Container>
      <div>
        <Container >
          <h1 className="align-center font"> Selected Work</h1>
          <ul className="work-list">
            <li className="work-container">
              <div className="work-thumbnail">
                <a href="#" data-work="work3">
                  <img src={shoppr} alt="" className="thumbnail-image"/>
                </a>
              </div>
              <div className="work-info green">
                    <h2 className="work-title">Shoppr</h2>
                    <p className="work-description">This React/Node.js app utilizes the the AI image recognition capabilities of the GoogleVision API and makes shopping a fun, easy and social experience<span className="triangle"></span></p>
                    <a href="#" className="read-more" data-work="work3"><AddCircleOutlineIcon/></a>
              </div>

            </li>

            <li className="work-container">
              <div className="work-thumbnail">
                <a href="#" data-work="work3">
                  <img src={spoiler} alt="" className="thumbnail-image"/>
                </a>
              </div>
              <div className="work-info coral">
                    <h2 className="work-title">Spoiler Alert</h2>
                    <p className="work-description">Spoiler Alert! is a food inventory and status tracking application. Users can sign-in to view items, add items, update item quantities, and remove items from their refrigerator. 
                    When items near their expiration date, Spoiler Alert! will send an alert to the user’s email informing him/her of the item that is near expiration.<span className="triangle"></span></p>
                    <a href="#" className="read-more" data-work="work3"><AddCircleOutlineIcon/></a>
              </div>

            </li>

          </ul>
        </Container>

        <Container >
          <h1 className="align-center font"> Blogs Published</h1>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
              <blockquote className="embedly-card"><h4><a href="https://medium.com/@shambhawi.kumari1393/global-state-management-react-hooks-compared-to-redux-818a4240f45e">Global State Management | React Hooks compared to Redux</a></h4><p>There is lot of buzz around state management, when application grows how do we maintain one stop store which tracks value of state at a given point of time. There are many famous libraries like Redux, MobX, Flux, Apollo client+GraphQL and many more in the list. The widely used being Redux.</p></blockquote>
              <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
              <blockquote className="embedly-card"><h4><a href="https://medium.com/@shambhawi.kumari1393/typescript-vs-javascript-dc1ed31bd95a">TypeScript vs JavaScript</a></h4><p>It is an object-based language, with JIT (Just-in-Time) compiler and dynamic typing. With ES6, JavaScript has moved a step towards Object-oriented concept but not completely as it still lacks true...</p></blockquote>
              <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
              <blockquote className="embedly-card"><h4><a href="https://medium.com/@shambhawi.kumari1393/lodash-vs-es6-why-lodash-still-preferred-fbfa9445fb30">Lodash vs ES6. Why Lodash still preferred.</a></h4><p>With various ES6 functions, Lodash is often debatable if we still need them. Matter of fact everything boils down to functionalities, if you can use Array.prototype.filter, .map and .reduce.to achieve the desired functionality. One can say why need Lodash when you can use in-built functions of javascript. But the fact is about convenience.</p></blockquote>
              <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
              </Paper>
            </Grid>
          </Grid>
        </Container>

      </div>
    </div>
  );
};

export default About;
