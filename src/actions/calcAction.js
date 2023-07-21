import { SET_EVENTS, CLEAR_EVENTS, SET_MONTHLYPASS, SET_BATTLEPASS, SET_SHOPPULLS, SET_ABYSSSTARS, SET_ENDDATE, SET_GEMS, CLEAR_CALC } from "../actionTypes/actionTypes";

const setEvents = () => {
  return {
    type: SET_EVENTS,

  };
};

const clearEvents = () => {
  return {
    type: CLEAR_EVENTS,
  };
};

const setMonthlyPass = (input) => {
  return {
    type: SET_MONTHLYPASS,
    input: input
  };
};

const setBattlePass = (input) => {
  return {
    type: SET_BATTLEPASS,
    input: input
  };
};

const setShopPulls = (input) => {
  return {
    type: SET_SHOPPULLS,
    input: input
  };
};

const setAbyssStars = (input) => {
  return {
    type: SET_ABYSSSTARS,
    stars: input
  };
};

const setEndDate = (input) => {
  return {
    type: SET_ENDDATE,
    date: input
  };
};

const setGems = (input) => {
  return {
    type: SET_GEMS,
    gems: input
  };
};

const clearCalc = () => {
  return {
    type: CLEAR_CALC,
  };
};

export { setEvents, clearEvents, setMonthlyPass, setBattlePass, setShopPulls, setAbyssStars, setEndDate, setGems, clearCalc };
