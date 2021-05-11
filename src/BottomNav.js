import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography color="textSecondary">NOTE: This is a community-driven fun meme project, please do your research before buying this or any other crypto asset.
      </Typography>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          href="https://t.me/RIPHarambeToken"
          rel="noopener noreferrer"
          target="_blank"
          icon={<FontAwesomeIcon icon={faTelegram} />}
        />
        <BottomNavigationAction icon={<FontAwesomeIcon icon={faDiscord} />} />
        <BottomNavigationAction icon={<FontAwesomeIcon icon={faFacebook} />} />
        <BottomNavigationAction icon={<FontAwesomeIcon icon={faTwitter} />} />
      </BottomNavigation>
    </Container>
  );
}

