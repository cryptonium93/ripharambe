import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '36ch',
    //backgroundColor: theme.palette.background.paper,
    //backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: '10ch',
  },
  text: {
    //color: 'white',
  },
  inline: {
    //color: 'white',
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
                color="textPrimary"
              >
              <Link rel="noopener noreferrer" target="_blank" href='https://unicrypt.network/amm/pancakev2/pair/0x63277431F073F6820fDefb234a57933e8E6C6811'>
                Unicrypt Locker
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
              {' + 5.28% per transaction in the month of May'}
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
              {' - 5/28'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

