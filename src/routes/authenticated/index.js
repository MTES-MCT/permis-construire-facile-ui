import AccountIcon from '@material-ui/icons/AccountCircle';
import MonCompte from 'pages/protected/MonCompte';
import SignOutIcon from '@material-ui/icons/LockOpen';
import PiecesJointes from 'pages/protected/PiecesJointes';
import Localiser from 'pages/protected/Localiser';
import Communes from 'pages/Communes';
import MapIcon from '@material-ui/icons/Map';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CityIcon from '@material-ui/icons/LocationCity';
import Cgu from 'pages/Cgu';
import Aide from 'pages/Aide';
import AideIcon from '@material-ui/icons/Help';

const routes = [
  {
    id: 'piecesjointes',
    path: '/piecesjointes/:typeDemande(dp|pcmi)',
    label: 'Pièces jointes',
    icon: SaveAltIcon,
    component: PiecesJointes,
    sidebar: true
  },
  {
    id: 'localiser',
    path: '/localiser',
    label: 'Localiser',
    icon: MapIcon,
    component: Localiser,
    sidebar: true
  },
  {
    id: 'communes',
    path: '/communes',
    label: 'Communes',
    icon: CityIcon,
    component: Communes,
    sidebar: true
  },
  {
    id: 'moncompte',
    path: '/moncompte',
    label: 'Mon compte',
    icon: AccountIcon,
    component: MonCompte,
    sidebar: true,
    auth: true
  },
  {
    id: 'deconnexion',
    label: 'Déconnexion',
    icon: SignOutIcon,
    sidebar: true,
    auth: true
  },
  {
    id: 'aide',
    path: '/aide',
    label: 'Aide',
    icon: AideIcon,
    component: Aide,
    sidebar: false
  },
  {
    id: 'cgu',
    path: '/cgu',
    label: 'CGU',
    icon: null,
    component: Cgu,
    sidebar: false
  }
];

export default routes;