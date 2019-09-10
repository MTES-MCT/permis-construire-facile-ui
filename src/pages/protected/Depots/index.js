/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import AppAppBar from 'components/AppAppBar';
import AppFooter from 'components/AppFooter';
import withRoot from 'theme/withRoot';
import depotsApi from 'utils/depots';
import { useAsync } from 'react-async';
import Error from 'pages/Error';
import LinearProgress from '@material-ui/core/LinearProgress';
import DataTable from 'components/DataTable';
import compose from 'utils/compose';
import { withRouter } from 'react-router';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useUser } from 'context/user-context';
import FileUploadButton from 'components/FileUploadButton';

async function handleDepots() {
  return await depotsApi.mesDepots();
}

function Depots(props) {
  const {
    data = {
      depots: []
    },
    error,
    setError,
    isRejected,
    isLoading,
    isFulfilled,
    reload
  } = useAsync({
    promiseFn: handleDepots
  });
  const { history } = props;
  const { isBeta } = useUser();
  async function handleAjouterDepot(file, binary) {
    const depot = await depotsApi.ajouterDepot(file, binary);
    const code = depot.type + 'cerfa';
    await depotsApi.savePieceJointe(code, file, binary);
  }
  if (isRejected) return <Error error={error.message} />;
  if (isLoading) return <LinearProgress />;
  if (isFulfilled) {
    const { depots } = data;
    return (
      <React.Fragment>
        <AppAppBar />
        <DataTable
          title="Dépôts"
          columns={[
            { label: 'Id', id: 'id', numeric: true, disablePadding: false },
            {
              label: 'Type',
              id: 'type',
              numeric: false,
              disablePadding: false
            },
            {
              label: 'Date',
              id: 'date',
              numeric: false,
              disablePadding: false
            },
            { label: 'État', id: 'etat', numeric: false, disablePadding: false }
          ]}
          rows={depots || []}
          onRowClick={{
            icon: () => <VisibilityIcon />,
            tooltip: 'Voir le dépôt',
            onClick: (event, rowId) => history.push(`/depots/${rowId}`)
          }}
          addComponent={
            isBeta ? (
              <FileUploadButton
                iconName="add"
                color="secondary"
                label="Ajouter"
                variant="contained"
                onUploadFile={handleAjouterDepot}
                reload={reload}
                setError={setError}
                acceptedFormats="application/pdf"
              />
            ) : (
              undefined
            )
          }
        />
        <AppFooter />
      </React.Fragment>
    );
  }
}
Depots.propTypes = {
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withRoot
)(Depots);