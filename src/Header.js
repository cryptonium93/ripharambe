import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import pancakeswap from './pancakeswap.svg';
import icon from './icon.svg';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Tokenomics from './Tokenomics.js'
import Roadmap from './Roadmap.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    maxWidth: 345,
    //background: 'black',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  text: {
    //fontWeight: 'bold',
    color: '#f7fbff',
  },
  button: {
    color: '#f7fbff',
    //color: 'transparent',
    marginTop: '10ch',
  }
}));

const handleClick = () => {
  console.info('You clicked the Chip.');
};

        //<Typography><img src={icon} alt="icon" /></Typography>
export default function Header(props) {
  const classes = useStyles();

  const pcsIcon = (
      <Icon>
        <img alt="pancakeswap" src={pancakeswap}/>
      </Icon>
      )

  return (
      <Container maxWidth="sm" className={classes.root}>
        <Typography className={classes.text} color="textPrimary">Community Ape Fund</Typography>
        <Typography className={classes.text} color="textSecondary">{props.supply}</Typography>
        <Typography className={classes.text} style={{marginTop:'10ch'}} >
          On 5/28/2016 Harambe was tragically murdered at the young age of 17.  We’ve created a lighthearted fun crypto in his memory to make sure we never forget that fateful day in history. This project strives to build a community, have fun, and decide where we go together. Welcome to the movement. 
        </Typography>
        <Link color="#f7fbff" rel="noopener noreferrer" target="_blank" href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5ab48bbfca3214764ac06c8c37b3a3414533038f'>
          <Button
            size="large"
            variant="outlined"
            color="inherit"
            className={classes.button}
            startIcon={pcsIcon}
          >
            Buy Now
          </Button>
        </Link>

        <Tokenomics />
        <Roadmap />
      </Container>
  );
}
