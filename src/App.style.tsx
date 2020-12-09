import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    height: '50vh',
    '&:last-child': {
      backgroundColor: theme.palette.secondary.light
    },
    '&:first-child': {
      backgroundColor: theme.palette.primary.dark
    }
  }
}));

export default useStyles;