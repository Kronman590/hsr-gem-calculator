import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Calculator from "./Calculator";
import Events from "./Events";

const Main = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (newValue !== value) {
      setValue(newValue);
    }
  };

  return (
    <>
      <div className="header">
          <h1>Honkai Star Rail Free Stellar Jade Calculator</h1>
          <p>This calculator will take into account the various time-based methods of obtaining stellar jades to help set expectations when saving.<br/></p>
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
      <div className="header">
        <p><b>Assumptions:</b><br/>Nameless Honor advances 1.5 levels every day, counting only the gems & Special Passes.<br/>
          Memory of Chaos gems are obtained on reset (every other Monday).<br/>
          Only Special Passes are counted from the Embers shop. Assumed all 5 are purchased.<br/>
          Simulated Universe is fully completed every Monday.<br/>
          All gems available today have already been claimed.<br/>
          Event gems are obtained by default when they begin (i.e. login events last 2 weeks, but rewards are obtained in the first 7 days).<br/>
          Any events yet to be completed but past their initial days can be selected in the Events tab, and the gems available in past days will be added to the total.</p>
          <a href="https://github.com/Kronman590/hsr-gem-calculator/issues">Issues? Create a ticket on Github</a>
      </div>
    </>
  );
};

export default Main;
