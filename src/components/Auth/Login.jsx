import React, { useState } from 'react';
import { loginUser } from "../../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';



const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding : theme.spacing(2, 0, 2),
    },
}));




function Login(props) {
    const classes = useStyles();
    const { loginError, isAuthenticated } = props;
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        dispatch(loginUser(email, password));
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    if (isAuthenticated) {
        return <Redirect to="/home" />;
    } else {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                    Iniciar sesion
                </Button>
                <Dialog onClose={handleClose} open={open}>
                    <DialogContent dividers>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" color={'textSecondary'}>Sign in</Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={e => setEmail(e.target.value)}
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    onChange={e => setPassword(e.target.value)}
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    fullWidth
                                    margin="normal"
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                    onClick={handleSubmit}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" color={"textSecondary"}>Forgot password?</Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/signup" variant="body2" color={"textSecondary"}>{"Don't have an account? Sign Up"}</Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps)(Login);