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
    minHeight: "100%",
    height : "100%",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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

const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  const classes = useStyles();

  const [selected, setSelected] = React.useState(false);
  const [alignment, setAlignment] = React.useState('left');
  const [values, setValues] = React.useState();


  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange2 = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    Buscar por:
                  </Grid>
                  <Grid item xs={4}>
                    <ToggleButtonGroup
                      value={alignment}
                      exclusive
                      onChange={handleAlignment}
                      aria-label="text alignment"
                    >
                      <ToggleButton value="left" aria-label="left aligned">
                        Texto
                  </ToggleButton>
                      <ToggleButton value="center" aria-label="centered">
                        Link
                  </ToggleButton>
                  <Button>
                    Resumir
                  </Button>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  fullWidth
                  rowsMax="4"
                  onChange={handleChange2('multiline')}
                  className={classes.textField}
                  margin="normal"
                  helperText="hello"
                  variant="outlined"
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <Typography>Resultados</Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Multiline"
                  multiline
                  fullWidth
                  rowsMax="4"
                  onChange={handleChange2('multiline')}
                  className={classes.textField}
                  margin="normal"
                  helperText="hello"
                  variant="outlined"
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
    </React.Fragment>
  );
}