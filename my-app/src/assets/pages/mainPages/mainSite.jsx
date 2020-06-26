import React, { Component } from 'react';
import MenuAppBar from '../../components/MyAppBar';
import IconLabelTabs from '../../components/testTab';

class MainSite extends Component {

  render(){
      return(
          <div>
              {/* <MenuAppBar /> */}
              <IconLabelTabs />
          </div>
      )
  }
}
export default MainSite;