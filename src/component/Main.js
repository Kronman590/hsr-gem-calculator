import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Calculator from "./Calculator";
import Events from "./Events";

const Main = () => {
  const [value, setValue] = React.useState(0);

  // function CustomTabPanel(props) {
  //   const { children, value, index, ...other } = props;
  
  //   return (
  //     <div
  //     role="tabpanel"
  //     hidden={value !== index}
  //     id={`simple-tabpanel-${index}`}
  //     aria-labelledby={`simple-tab-${index}`}
  //     {...other}>
  //       {children}
  //     </div>
  //   );
  // }
  
  // function a11yProps(index) {
  //   return {
  //     id: `simple-tab-${index}`,
  //     'aria-controls': `simple-tabpanel-${index}`,
  //   };
  // }

  const handleChange = (event, newValue) => {
    if (newValue !== value) {
      setValue(newValue);
    }
  };

  return (
    <>
      <div className="header">
          <h1>Honkai Star Rail Free Stellar Jade Calculator</h1>
          <p>This calculator will take into account the various time-based methods of obtaining stellar jades to help set expectations when saving.<br/>
          <b>Assumptions:</b><br/>Nameless Honor advances 10 levels every Monday, counting only the gems & Special Passes.<br/>
          Memory of Chaos gems are obtained on reset (every other Monday).<br/>
          Only Special Passes are counted from the Embers shop. Assumed all 5 are purchased.<br/>
          Event gems are obtained by default when they begin (i.e. login events last 2 weeks, but rewards are obtained in the first 7 days).<br/>
          Any events yet to be completed but past their initial days can be selected in the Events tab, and the gems available in past days will be added to the total.</p>
          <a href="https://github.com/Kronman590/hsr-gem-calculator/issues">Issues? Create a ticket on Github</a>
      </div>
      <Tabs value={value} onChange={handleChange} textColor='inherit' indicatorColor=''>
        <Tab label="Calculator"  />
        <Tab label="Events"  />
      </Tabs>
      <div className="body" style={{display: (value == 0 ? "" : "none")}}>
          <Container fixed
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator/>
          </Container>
        </div>
      <div className="body" style={{display: (value == 1 ? "" : "none")}}>
          <Container fixed
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Events/>
          </Container>
        </div>
      {/* <CustomTabPanel value={value} index={0}>
        <div className="body">
          <Container fixed
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator page={value}/>
          </Container>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="body">
          <Container fixed
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Events/>
          </Container>
        </div>
      </CustomTabPanel> */}
    </>
  );
};

export default Main;
