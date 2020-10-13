import React, {useEffect, useState} from "react";
import parallex1 from "../Assets/parallex1.jpg";
import profile from "../Assets/profile.jpg"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "../App.css";
// import Paper from '@material-ui/core/Paper';
import BarChart from '../components/BarChart/BarChart';
import Fab from '@material-ui/core/Fab';
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';
import resume from '../Assets/resume.pdf';
import shoppr from '../Assets/shoppr.jpg';
import spoiler from '../Assets/spoiler-alert.png';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
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

      </div>
    </div>
  );
};

export default About;
