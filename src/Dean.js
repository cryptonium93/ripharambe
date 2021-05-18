import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import dean from './videos/harambe_dean.mp4';
import YoutubeEmbed from "./YoutubeEmbed";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    maxWidth: 1000,
    color: "#f7fbff",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

/*
export default function Dean() {
  const classes = useStyles();

  return (
      <Container maxWidth="sm" className={classes.root}>
        <Typography >#HanksOutForHarambe</Typography>
  <div className="video-responsive"
    style={{
      position: "relative",
      paddingBottom: "56.25%",
      paddingTop: 25,
      height: 0
    }}
  >
    <iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      src={dean}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded Dean"
    />
  </div>
      </Container>
  )
}
*/

export default function Dean() {
  const classes = useStyles();

  return (
      <Container maxWidth="sm" className={classes.root}>
        <Typography><h1>Anthem</h1></Typography>
        <YoutubeEmbed embedId="4QEZgwiEvHU" />
      </Container>
  )
}
