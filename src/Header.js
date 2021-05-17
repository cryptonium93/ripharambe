import React from 'react';
import copy from "copy-to-clipboard";  
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Player } from 'video-react';
import Dean from './Dean.js'
import videojs from 'video.js'
import dean from './videos/harambe_dean.mp4';
import pancakeswap from './pancakeswap.svg';
import telegram from './images/telegram.svg';
//import icon from './icon.svg';
import icon from './harambe_icon.png';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
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
    fontSize: 14,
    color: '#f7fbff',
  },
  button: {
    color: '#f7fbff',
    //color: 'transparent',
    marginTop: '10ch',
    marginRight: '1ch'
  }
}));

const handleClick = () => {
  console.info('You clicked the Chip.');
};

        //<Typography><img src={icon} alt="icon" /></Typography>
export default function Header(props) {
  const classes = useStyles();

    const [copyText, setCopyText] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
    const handleCopyText = (e) => {
       setCopyText(e.target.value);
    } 
    
    const copyToClipboard = () => {
       copy(addr);
       handleClick()
       //alert(`You have copied "${addr}"`);
    }

  const pcsIcon = (
      <Icon>
        <img alt="pancakeswap" src={pancakeswap}/>
      </Icon>
      )

  const tgIcon = (
      <Icon>
        <img alt="telegram" src={telegram}/>
      </Icon>
      )

  const addr = "0x5aB48BbFca3214764ac06c8C37B3a3414533038F";

  return (
      <Container maxWidth="sm" className={classes.root}>
        <Dean />
        <Typography className={classes.text} color="textPrimary">Community Ape Fund</Typography>
        <Typography className={classes.text} color="textSecondary">{props.supply}</Typography>
        <Typography className={classes.text} style={{marginTop: '2ch'}} color="textPrimary">Contract Address</Typography>
        <Typography className={classes.text} size="sm" color="textSecondary"><span value={addr} onClick={copyToClipboard}>0x5aB48BbFca3214764ac06c8C37B3a3414533038F</span></Typography>
				<Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={700}
        onClose={handleClose}
        message="Copied"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
        <Typography className={classes.text} style={{marginTop:'7ch'}} >
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

        <Link color="#f7fbff" rel="noopener noreferrer" target="_blank" href='https://t.me/RIPHarambeToken'>
          <Button
            size="large"
            variant="outlined"
            color="inherit"
            className={classes.button}
            startIcon={tgIcon}
          >
            Join Us
          </Button>
        </Link>

        <Tokenomics />
        <Roadmap />
      </Container>
  );
}
