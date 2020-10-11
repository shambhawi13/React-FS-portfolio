import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";

function Nav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About" value={0} 
                            component={Link} 
                            to='/about' />
          <Tab label="Project Dashboard" value={1} 
                            component={Link} 
                            to='/dashboard' />
          <Tab label="Contact" value={2} 
                            component={Link} 
                            to='/contact' />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Nav;
