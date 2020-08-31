import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import {
    Home,
    HomeOutlined,
    Category,
    CategoryOutlined,
    Settings,
    SettingsOutlined,
    Phone,

} from '@material-ui/icons';

const AntTabs = withStyles({

    indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    minHeight:3,
    '& > span': {
        maxWidth: 70,
        width: '100%',
        backgroundColor: '#ff7043',
       
    },

    
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const AntTab = withStyles((theme) => ({
  root: {
      
    textTransform: 'none',
   
    fontWeight: theme.typography.fontWeightRegular,
 
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
    '&:hover': {
      color: '#ff7043',
      opacity: 1,
    },
    '&$selected': {
      color: '#ff7043',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#ff7043',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function NavbarTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab icon={(value===0?<Home />: <HomeOutlined />)}  />
          <AntTab icon={(value===1?<Category />: <CategoryOutlined />)}  />
          <AntTab icon={(value===2?<Settings />: <SettingsOutlined />)}  />
        </AntTabs>
       
      </div>

    </div>
  );
}
