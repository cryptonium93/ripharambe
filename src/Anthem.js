import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import YoutubeEmbed from "./YoutubeEmbed";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Anthem() {
  const classes = useStyles();

  return (
      <Container maxWidth="sm" className={classes.root}>
        <Typography><h1>Anthem</h1></Typography>
        <YoutubeEmbed embedId="Z1U2x63aERw" />
      </Container>
  )
}
