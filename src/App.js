import React, { Component } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Web3 from 'web3'
import background from './background.jpg'
import AlignItemList from './AlignItemList.js'
import Anthem from "./Anthem.js";
import TopBar from './AppBar.js'
import Header from './Header.js'
import BottomNav from './BottomNav.js'
import logo2 from './icon48.png';
import logo from './logo.svg';
import icon from './icon.svg';
import Link from '@material-ui/core/Link';
//import { ReactComponent as Hicon } from './icon.svg'
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DoneIcon from '@material-ui/icons/Done';
import ShopIcon from '@material-ui/icons/Shop';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SvgIcon from '@material-ui/core/SvgIcon';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';

class Contract extends Component {
  constructor(metafile) {
    const meta = require("./RIPHarambe_metadata.json")
    this.abi = meta.output.abi
  }
}

class Harambe extends Component {
  constructor() {
    super("./RIPHarambe_metadata.json")
  }
}

//const theme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiIcon: {
      root: {
        "& > *:first-child": {
          flexShrink: 1
        }
      }
    },
    MuiButton: {
      startIcon: {
        "& > *:first-child": {
          alignItems: "center",
          width: "2ch",
          height: "auto"
        }
      },
      iconSizeLarge: {
        "& > *:first-child": {
        fontSize: 18
        }
      }
    }
 },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    maxWidth: 345,
    color: 'black',
    background: 'black',
    backgroundColor: 'blue',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tokenomics: {
    marginTop: '10px',
  },
  logo: {
    flexGrow: 1,
    maxHeight: 2,
    maxWidth: 40,
    marginRight: '10px',
  },
  about: {
    textAlign: 'center',
    maxWidth: 'sm',
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  },
});

function TokenIcon2(props) {
  return (
    <SvgIcon {...props}>
      <path component={icon}/>
    </SvgIcon>
  );
}

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async handleConnect() {
	  let web3 = new Web3(window.ethereum)
 	  let accounts = await web3.eth.requestAccounts()
    this.setState({ account: accounts[0] })
  }

  async loadBlockchainData() {
    //const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    var meta = require("./RIPHarambe_metadata.json")
    let web3 = new Web3('https://bsc-dataseed1.binance.org:443');
    let accounts = await web3.eth.getAccounts()
    if (window.ethereum && 0) {
      console.log("Use metmask");
      web3 = new Web3(window.ethereum)
      accounts = await web3.eth.requestAccounts()
    }

    console.log("web3 ", web3)
    console.log("accounts ", accounts)
    this.setState({ account: accounts[0] })
    let h = new web3.eth.Contract(meta.output.abi, "0x5ab48bbfca3214764ac06c8c37b3a3414533038f")
    let s = await h.methods.harambeSupply().call();
    let v = s;
    console.log("Length ", s.length);
    if (s.length > 18) {
      let l = s.length - 18;
      v = s.substring(0, l) + "." + s.substring(l, l+3) + "B";
    }

    this.setState({supply: v})

    let s1 = await h.methods.proposedHarambeWallet1().call();
    let s2 = await h.methods.proposedHarambeWallet2().call();
    console.log("got w1 ", s1)
    console.log("got w2 ", s2)
    this.setState({wallet1: s1})
    this.setState({wallet2: s2})
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    const classes = this.props;
    const handleClick = () => {
      console.info('You clicked the Chip.');
    };
    const img = <img src={icon} alt="icon" />
    return (
    <div className='App'>
    <ThemeProvider theme={theme}>
      <TopBar wallet1={this.state.wallet1} wallet2={this.state.wallet2}/>
      <Header supply={this.state.supply}/>
			<Anthem />
			<BottomNav />
      </ThemeProvider>
    </div>
    );
  }
}

export default withStyles(useStyles)(App);
