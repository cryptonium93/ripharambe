import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import icon from './icon.svg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tokenomics from './Tokenomics.js'
import Roadmap from './Roadmap.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export default function Header(props) {
  const classes = useStyles();

  return (
      <Container maxWidth="sm" className={classes.root}>
        <Typography color="textPrimary">Community Ape Fund</Typography>
        <Typography color="textSecondary">{props.supply}</Typography>
        <Typography><img src={icon} alt="icon" /></Typography>
        <Tokenomics />
        <Roadmap />
      </Container>
  );
}
