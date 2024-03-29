import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    padding: '6em 2em 2em',
    width:'100%',
  },
  toolbar: {
    height: '70px',
  },
}));
