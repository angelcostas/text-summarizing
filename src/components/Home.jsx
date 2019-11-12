import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import CheckIcon from '@material-ui/icons/Check';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import TextField from '@material-ui/core/TextField';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import api from '../api';
import LogOut from './Auth/LogOut';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  textField: {
    padding: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textlink: {
    color: 'inherit',
    textDecoration: 'inherit'
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  container: {
    minHeight: "100%"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  const [selected, setSelected] = React.useState(false);
  const [alignment, setAlignment] = React.useState('left');
  const [values, setValues] = React.useState();


  const handleChange = name => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleClick = () =>{
    api.post('/text',"do00")
      .then(res =>{
        console.log(res);
      })
      .catch(error =>{
        console.log(error);
      });

  };


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="secondary">
        <Toolbar>
          <MenuBookIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap style={{ flex: 1 }}>
            Text Surgeon
          </Typography>
          <LogOut/>
        </Toolbar>
      </AppBar>
      {console.log(values)}
      {/* Hero unit */}

      <Grid container spacing={3} className={classes.heroContent} >
        <Grid item xs={6}>
          <Paper style={{ minHeight: "70vh" }}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="h4" style={{ marginLeft: 5 }}>
                  Buscar por:
                    </Typography>
              </Grid>
              <Grid item xs={8}>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton value="left" size="large"  >
                    <Typography style={{ paddingLeft: 20, paddingRight: 20 }}>Texto</Typography>
                  </ToggleButton>
                  <ToggleButton value="center" >
                    <Typography style={{ paddingLeft: 20, paddingRight: 20 }}>Link</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              height="80%"
              rows="15"
              onChange={handleChange('multiline')}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <Button style={{ marginLeft: 10 }} variant="contained" color="secondary" style={{marginLeft : "70%"}} onClick={handleClick} >
              <Typography style={{ paddingLeft: 20, paddingRight: 20 }}>Resumir</Typography>
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={6}>
          <Paper style={{ minHeight: "70vh" }}>
            <Typography variant="h4" style={{ marginLeft: 5 }}>
              Resultado:
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              fullWidth
              rows="15"
              onChange={handleChange('multiline')}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}