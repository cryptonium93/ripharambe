import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DoneIcon from '@material-ui/icons/Done';
import ShopIcon from '@material-ui/icons/Shop';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SvgIcon from '@material-ui/core/SvgIcon';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export default function TopBar(props) {
  console.log("wallet", props.wallet1)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const wallets = [
    { "value": "Wallet1", "text": props.wallet1},
    { "value": "Wallet2", "text": props.wallet2},
  ];
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            RIPHarambe
          </Typography>
          <Tooltip title="Purchase">
              <Link rel="noopener noreferrer" target="_blank" href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5ab48bbfca3214764ac06c8c37b3a3414533038f'>
            <IconButton>
              <ShopIcon />
            </IconButton>
              </Link>
          </Tooltip>
          <Button color="primary" variant="contained">Connect</Button>
      		<Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
        		Vote
      		</Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {wallets.map((wallet) => (
              <MenuItem onClick={handleClose} key={wallet.value} value={wallet.value}>{wallet.text}</MenuItem>
            ))}
            <MenuItem onClick={handleClose}>Neither</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      );
}
