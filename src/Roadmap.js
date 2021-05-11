import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    maxWidth: 345,
    color: "#f7fbff",
    //backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Roadmap() {
  const classes = useStyles();

  return (
      <Container maxWidth="sm" className={classes.root}>
        <Typography><h1>Roadmap</h1></Typography>
        <List>

          <ListItem
            button
            component="a"
            href="https://bscscan.com/address/0x5ab48bbfca3214764ac06c8c37b3a3414533038f#code"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ListItemIcon>
              <CheckCircleIcon htmlColor="#f7fbff" />
            </ListItemIcon>
            <ListItemText primary="Launch Contract"/>
          </ListItem>

          <ListItem
            button
            component="a"
            href="https://unicrypt.network/amm/pancakev2/pair/0x63277431F073F6820fDefb234a57933e8E6C6811"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ListItemIcon>
              <CheckCircleIcon htmlColor="#f7fbff" />
            </ListItemIcon>
            <ListItemText primary="Lock Liquidity"/>
          </ListItem>

          <ListItem><ListItemText primary="Special Giveaway - 5/28"/></ListItem>
          <ListItem><ListItemText primary="Harambe Fund Vote - Q2"/></ListItem>
          <ListItem><ListItemText primary="Save Harambe Game - Q2"/></ListItem>

        </List>
      </Container>
  );
}
