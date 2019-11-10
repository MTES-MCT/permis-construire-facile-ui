import React from 'react';
import PropTypes from 'prop-types';
import AppTheme from 'theme/AppTheme';
import { withRouter } from 'react-router-dom';
import AppAppBar from 'components/AppAppBar';
import AppFooter from 'components/AppFooter';
import compose from 'utils/compose';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { useAsync } from 'react-async';
import api from 'api/dossiers';
import Error from 'pages/Error';
import LinearProgress from '@material-ui/core/LinearProgress';
import NotFound from 'pages/NotFound';
import CardActions from '@material-ui/core/CardActions';
import Button from 'components/Button';
import { Link as RouterLink } from 'react-router-dom';
import Typography from 'components/Typography';
import { dossierWorkflow } from 'pages/protected/Dossiers/steps';
import Grid from '@material-ui/core/Grid';
import EtapesStepper from 'pages/protected/Dossiers/EtapesStepper';
import { useUser } from 'context/user-context';
import AddMessageButton from 'pages/protected/Messages/AddMessageButton';
import FileUploadButton from 'components/FileUploadButton';
import EmailIcon from '@material-ui/icons/Email';
import AttachIcon from '@material-ui/icons/AttachFile';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Chip from '@material-ui/core/Chip';
import steps from 'pages/protected/Dossiers/steps';
import format from 'format/dates';
import { Badge } from '@material-ui/core';

const styles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  badge: {}
});

async function handleDossier({ id }) {
  return { dossier: await api.consulterDossier(id) };
}

function JoursRestants(props) {
  const { dossier } = props;
  return (
    <Typography variant="body2" marked="center" align="center">
      {dossier.statutsRestants.length > 0 &&
        `Il reste ${
          dossier.statutActuel.joursRestants
        } jours avant qu'il soit ${
          dossier.statutsRestants.length > 0
            ? ['INCOMPLET', 'COMPLET'].includes(dossier.statutsRestants[0].id)
              ? `déclaré ${dossier.statutsRestants[0].libelle} ou ${dossier.statutsRestants[1].libelle}`
              : dossier.statutsRestants[0].libelle
            : ''
        }`}
    </Typography>
  );
}
JoursRestants.propTypes = {
  classes: PropTypes.object,
  dossier: PropTypes.object.isRequired
};

function Dossier(props) {
  const { match } = props;
  const classes = styles(props);
  const id = match.params.id;
  const { isMairie, isInstructeur } = useUser();
  const theme = useTheme();
  const isSmallMedia = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    data = { dossier: null },
    error,
    isLoading,
    isRejected,
    reload,
    setError
  } = useAsync({
    promiseFn: handleDossier,
    id: id
  });

  async function handleQualifier() {
    await api.qualifierDossier(id);
    reload();
  }
  async function handleDeclarerIncomplet(contenu) {
    await api.declarerIncompletDossier(id, contenu);
    reload();
  }
  async function handleDeclarerComplet() {
    await api.declarerCompletDossier(id);
    reload();
  }
  async function handlePrendreDecision(formData) {
    await api.prendreDecision(id, formData);
    reload();
  }

  if (isRejected) return <Error error={error.message} />;
  if (isLoading) return <LinearProgress />;
  if (data) {
    const { dossier } = data;
    if (!dossier) return <NotFound />;
    console.log('piecesJointes=', JSON.stringify(dossier.piecesJointes));
    return (
      <AppTheme>
        <AppAppBar />
        <Typography variant="h2" marked="center" align="center">
          {`Dossier n°${dossier.id}`}
        </Typography>
        <Card className={classes.card}>
          <CardHeader title={dossier.type.libelle} />
          <CardContent className={classes.content}>
            {isSmallMedia ? (
              <Grid container className={classes.grid}>
                <Grid item xs={12}>
                  <Chip
                    icon={
                      steps.find(step => step.id === dossier.statutActuel.id)
                        .icon
                    }
                    label={dossier.statutActuel.libelle}
                    color="secondary"
                  />
                  <Typography variant="body2" marked="center" align="center">
                    {`Depuis le ${format(dossier.statutActuel.dateDebut)}`}
                  </Typography>
                  <JoursRestants dossier={dossier} />
                </Grid>
              </Grid>
            ) : (
              <Grid container className={classes.grid}>
                <Grid item xs={12}>
                  <EtapesStepper
                    steps={dossierWorkflow(dossier)}
                    activeStepId={dossier.statutActuel.id}
                  />
                  <JoursRestants dossier={dossier} />
                </Grid>
              </Grid>
            )}
          </CardContent>
          <CardActions>
            <Badge
              className={classes.badge}
              badgeContent={dossier.piecesJointes.length}
              max={10}
              color="primary"
            >
              <Button
                variant="contained"
                color="secondary"
                component={RouterLink}
                to={`/dossiers/${dossier.id}/piecesjointes`}
                data-cy="piecesjointes-btn"
              >
                {`Pièces jointes`}
                <AttachIcon />
              </Button>
            </Badge>
            <Badge
              className={classes.badge}
              badgeContent={dossier.messages.length}
              max={10}
              color="primary"
            >
              <Button
                variant="contained"
                color="secondary"
                component={RouterLink}
                to={`/dossiers/${dossier.id}/messages`}
                data-cy="messages-btn"
              >
                {`Messages`}
                <EmailIcon />
              </Button>
            </Badge>
            {isMairie && dossier.statutActuel.id === 'DEPOSE' && (
              <Button
                variant="contained"
                color="secondary"
                onClick={event => handleQualifier()}
                data-cy="qualifier-btn"
              >
                {`Qualifier`}
              </Button>
            )}
            {isInstructeur &&
              ['QUALIFIE', 'INCOMPLET'].includes(dossier.statutActuel.id) && (
                <React.Fragment>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={event => handleDeclarerComplet()}
                    data-cy="declarer-complet-btn"
                  >
                    {`Déclarer complet`}
                  </Button>
                  <AddMessageButton
                    label={'Déclarer incomplet'}
                    dossierId={dossier.id}
                    onSaveMessage={(event, contenu) =>
                      handleDeclarerIncomplet(contenu)
                    }
                  />
                </React.Fragment>
              )}
            {isMairie && dossier.statutActuel.id === 'COMPLET' && (
              <FileUploadButton
                iconName="attach_file"
                color="secondary"
                label="Prendre décision"
                variant="contained"
                onUploadFile={handlePrendreDecision}
                setError={setError}
                acceptedFormats={['application/pdf']}
              />
            )}
          </CardActions>
        </Card>
        <AppFooter />
      </AppTheme>
    );
  }
}
Dossier.propTypes = {
  match: PropTypes.object.isRequired
};

export default compose(withRouter)(Dossier);
