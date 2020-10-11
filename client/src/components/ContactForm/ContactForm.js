import React, {useRef} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import "./style.css";
import API from "../../utils/API";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '200'
      },
    },
  }));

function ContactForm(){
    const classes = useStyles();
    const fNameRef = useRef();
    const lNameRef = useRef();
    const mobileRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();

    function handleSendEmail(event){
        event.preventDefault();
        let postData = {
            name: fNameRef.current.value + " " + lNameRef.current.value,
            email: emailRef.current.value,
            phone: mobileRef.current.value,
            subject: subjectRef.current.val
        }
        console.log('postData',postData);
        API.sendEmail(postData).then((res)=>{
            console.log(res);
        })
    }

    return (
        <div className="contact-container">
            <Paper elevation={3} >
            <form className={classes.root} id="pad" autoComplete="off" onSubmit={handleSendEmail}>
                <InputLabel><AccountCircle></AccountCircle>Connect to &nbsp;
                <span className="email-highlight"> shambhawi.kumari1393@gmail.com</span>
                </InputLabel>
                <hr></hr>
                <TextField required inputRef={fNameRef} id="fName" className="fName" label="First Name" placeholder="First Name" />
                <TextField required inputRef={lNameRef} id="lName" className="lName" label="Last Name" placeholder="Last Name" />
                <TextField fullWidth inputRef={mobileRef} required id="mobile" label="Mobile Number" placeholder="+1(000)0000" />
                <TextField fullWidth inputRef={emailRef} required id="email" label="Email" placeholder="some@some.com" />
                <div>
                    <TextField
                        inputRef={subjectRef}
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
                endIcon={<Icon>send</Icon>}
                type="submit"
                >
                    Send Mail
                </Button>
            </form>
            </Paper>
        </div>
    )
}

export default ContactForm;