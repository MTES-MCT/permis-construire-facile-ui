import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from 'components/Button';
import Typography from 'components/Typography';
import EditIcon from '@material-ui/icons/Edit';
import LockIcon from '@material-ui/icons/Lock';
import PeopleIcon from '@material-ui/icons/People';
import { genericHashLink } from 'react-router-hash-link';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useAuth } from 'context/auth-context';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden'
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(14)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    fontSize: 64,
    margin: theme.spacing(4)
  },
  button: {
    marginTop: theme.spacing(8)
  },
  remonter: {
    margin: theme.spacing(1),
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
});

const IconButtonHashLink = props => genericHashLink(props, IconButton);

function CommentFaire(props) {
  const { classes } = props;
  const { login } = useAuth();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Comment faire ?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <EditIcon alt="edit" className={classes.icon} />
                <Typography variant="h5" align="center">
                  {`Préparer et déposer sa demande sur `}
                </Typography>
                <Link
                  color="inherit"
                  href="https://www.service-public.fr/particuliers/vosdroits/R52221"
                >{`service-public.fr`}</Link>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <LockIcon alt="people" className={classes.icon} />
                <Typography variant="h5" align="center">
                  {'Se connecter dans RIEAU'}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <PeopleIcon alt="people" className={classes.icon} />
                <Typography variant="h5" align="center">
                  {
                    "Suivre l'avancement de l'instruction de sa demande dans RIEAU"
                  }
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          id="localiser-btn"
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          onClick={login}
        >
          Connexion
        </Button>
        <Fab aria-label="remonter" className={classes.remonter}>
          <IconButtonHashLink
            component={RouterLink}
            to={{ pathname: '/', hash: '#app-bar' }}
          >
            <ExpandLessIcon color="secondary" />
          </IconButtonHashLink>
        </Fab>
      </Container>
    </section>
  );
}

CommentFaire.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommentFaire);
