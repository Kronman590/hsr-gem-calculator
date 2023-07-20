import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEvents, clearEvents, setGems, clearGems } from "../actions/calcAction";

const Main = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div class="header">
        <h1>Genshin Impact Free Primogem Calculator</h1>
        <p>This calculator will take into account the various time-based methods of obtaining primogems to help set expectations when saving.<br/>
        <b>Assumptions:</b><br/>Battle Pass advances 10 levels every Monday, counting only the gems & Intertwined Fates.<br/>
        Spiral Abyss gems are obtained on reset (1st and 16th of each month).<br/>
        Only Intertwined Fates are counted from the Stardust shop. Assumed all 5 are purchased.<br/>
        Event gems are obtained when they begin (i.e. login events last 2 weeks, but rewards are obtained in the first 7 days).</p>
        <a href="https://github.com/Kronman590/genshin-primo-calculator/issues">Issues? Create a ticket on Github</a>
    </div>
  );
};

export default Main;
