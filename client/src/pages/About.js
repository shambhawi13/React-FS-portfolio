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
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={classes.root}>
      <div>
      {/* {{height:30 +'em',width:100 + '%'}}  */}
        <img style= {{
          height:30 +'em',width:100 + '%',
            transform: `translateY(${offset * 0.5}px)`,
          }}
        className=" parallex"
         src={parallex1}></img>
      </div>
      <a href={resume} download>
        <Fab
            variant="extended"
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.margin,classes.fab}
          >
            <GetAppIcon className={classes.extendedIcon}></GetAppIcon>
            Download Resume
        </Fab>
      </a>
      <p className={classes.role}>
        <h2 style={{fontFamily: 'cursive'}}>Shambhawi Kumari</h2>
         <h3 style={{fontVariant: 'small-caps'}}> Full stack Engineer, passion for User Interface <br/> design and development </h3>
      </p>
      <Paper>
        <Container style={{backgroundColor: "white"}}>
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
      </Paper>
    </div>
  );
};

export default About;
