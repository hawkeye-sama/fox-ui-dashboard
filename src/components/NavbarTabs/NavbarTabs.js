import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
    Home,
    HomeOutlined,
    Category,
    CategoryOutlined,
    Settings,
    SettingsOutlined,

} from '@material-ui/icons';
import styles from 'assets/jss/material-dashboard-react/components/customNavbarStyle';

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
}))((props) => <Tab {...props} />);


const useStyles = makeStyles(styles)

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
