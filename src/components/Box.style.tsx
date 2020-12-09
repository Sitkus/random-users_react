import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    maxWidth: '600px',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  paper: {
    backgroundColor: `${theme.palette.secondary.light} !important`,
    height: '100px',
    width: '100%',
  },
  avatar: {
    border: '5px solid white',
    height: '100%',
    width: '120px',
    transform: 'translateY(-50%)',
    marginBottom: '-50px'
  },
  cardActions: {
    marginBottom: '20px'
  }
}));

export default useStyles;