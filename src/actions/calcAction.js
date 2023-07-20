import { SET_EVENTS, CLEAR_EVENTS, SET_GEMS, CLEAR_GEMS } from "../actionTypes/actionTypes";

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

const setGems = () => {
  return {
    type: SET_GEMS,
  };
};

const clearGems = () => {
  return {
    type: CLEAR_GEMS,
  };
};

export { setEvents, clearEvents, setGems, clearGems };
