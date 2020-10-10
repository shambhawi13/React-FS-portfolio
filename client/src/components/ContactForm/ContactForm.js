import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '200',
      },
    },
  }));

function ContactForm(){
    const classes = useStyles();

    return (
        <div className="contact-container">
            <form className={classes.root} autoComplete="off">
                <InputLabel><AccountCircle></AccountCircle>Connecting to &nbsp;
                <a href="#"> shambhawi.kumari1393@gmail.com</a>
                </InputLabel>

                <TextField required id="fName" className="fName" label="First Name" placeholder="First Name" />
                <TextField required id="lName" className="lName" label="Last Name" placeholder="Last Name" />
                <TextField fullWidth required id="mobile" label="Mobile Number" placeholder="+1(000)0000" />
                <TextField fullWidth required id="email" label="Email" placeholder="some@some.com" />
                <div>
                    <TextField
                        id="outlined-full-width"
                        label="Email content goes here"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        />
                </div>
                <Button variant="contained" 
                color="primary"
                endIcon={<Icon>send</Icon>}>
                    Send Mail
                </Button>
            </form>
        </div>
    )
}

export default ContactForm;