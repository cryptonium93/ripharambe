import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '36ch',
    //backgroundColor: theme.palette.background.paper,
    //backgroundColor: 'transparent',
    textAlign: 'center',
    //marginTop: '10ch',
  },
  text: {
    //color: 'white',
    color: "#f7fbff",
  },
  sub: {
    fontWeight: "1",
    color: "#e8ebed",
  },
  inline: {
    //color: 'white',
    color: "#f7fbff",
    display: 'inline',
  },
}));

export default function Tokenomics() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Typography className={classes.text}><h1>Tokenomics</h1></Typography>
      <ListItem  className={classes.text} alignItems="flex-start">
        <ListItemText
          primary="Liquidity Locked"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
              >
              <Link color="#f7fbff" rel="noopener noreferrer" target="_blank" href='https://unicrypt.network/amm/pancakev2/pair/0x63277431F073F6820fDefb234a57933e8E6C6811'>
                <Button color="inherit" variant="outlined" className={classes.inline} endIcon={<FontAwesomeIcon style={{color: "#f7fbff"}} icon={faExternalLinkAlt} />}>
                  Unicrypt Locker
                </Button>
              </Link>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.text} alignItems="flex-start">
        <ListItemText
          primary="Community Ape Fund"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                50,000,000,000
              </Typography>
              <Typography className={classes.sub}>
              {' + 5.28% per transaction in the month of May'}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem className={classes.text} alignItems="flex-start">
        <ListItemText
          primary="Special Giveway"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                3,000,000,000 RIPH to 17 HODLers
              </Typography>
              <Typography className={classes.sub}>
              {' - 5/28'}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

