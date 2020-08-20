import React from "react";
import parallex1 from "../Assets/parallex1.jpg";
import profile from "../Assets/profile.jpg"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "../App.css";


const About = () => {
  return (
    <div>
      <div>
        <img style={{height:30 +'em',width:100 + '%'}} className="responsive-img" src={parallex1}></img>
      </div>
      <Container>
      <h2 className="header">Author</h2>
            <Grid container className="wrap">
                <Grid item xs={4} className="image col l2 m3 s5">
                    <img className="img-fluid shadow float-left" src={profile} alt="Profile picture"/>
                </Grid>
                <Grid item xs={8} className="content col l10 m9 s7" >
                    <p className="grey-text text-darken-3 lighten-3 about-para" >Hi..!!! I am Shambhawi Kumari. I am a web
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
            </Grid>
      </Container>

    </div>
  );
};

export default About;
