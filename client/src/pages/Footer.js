import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';

function Footer(){
    return (
        <div className="page-footer blue-grey darken-2">
        <Grid container
          direction="row"
          justify="center">
               <Grid item sm={6} md={6} className="paddingLeft">
                    <h5 className="white-text">Address</h5>
                    <p className="grey-text text-lighten-4">Santa Clara, California-95054.</p>
                    <br/>
                    {/* <h5>Blogs</h5> */}
                    {/* <p className="medium-blog"><a
                            href="https://medium.com/@shambhawi.kumari1393/typescript-vs-javascript-dc1ed31bd95a?source=friends_link&sk=148bd5a4d4848b9e5c99c28c2237aad0`>TypeScript
                            vs JavaScript</a></p>
                    <p className="medium-blog"><a
                            href="https://medium.com/@shambhawi.kumari1393/lodash-vs-es6-why-lodash-still-preferred-fbfa9445fb30?source=friends_link&sk=d4a4c36a23556b68e92a469581cb2bad">Lodash
                            vs ES6</a></p> */}
                </Grid>
                <Grid item sm={6} md={6}>
                    <h4 className="white-text">Links</h4>
                    <ul>
                        <li><a className="grey-text text-lighten-3 icon"
                                href="https://www.linkedin.com/in/shambhawi-kumari/"><i
                                    className="fa fa-linkedin circle light-blue darken-4"></i></a> LinkedIn</li>
                        <li><a className="grey-text text-lighten-3 icon"
                                href="https://www.facebook.com/shambhawi.kumari.1/"><i
                                    className="fa fa-facebook circle blue darken-4"></i></a> Facebook</li>
                        <li><a className="grey-text text-lighten-3 icon" href="https://github.com/shambhawi13/"><i
                                    className="fa fa-github circle light-blue darken-4" aria-hidden="true"></i></a> Github</li>
                        <li><a className="grey-text text-lighten-3 icon" href="https://drive.google.com/file/d/1DXcJTZdgNrdJXd8yCEbqwDSRsmDeu2kv/view?usp=sharing"><i className="fa fa-file-text" aria-hidden="true"></i></a>Resume</li>


                    </ul>
                </Grid>
            </Grid>
            <Grid item sm={6} md={6}>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 Copyright
                    
                </div>
            </div>
        </Grid>
        </div>

      );
}

export default Footer;