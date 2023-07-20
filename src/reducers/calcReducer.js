import { SET_EVENTS, CLEAR_EVENTS, SET_GEMS, CLEAR_GEMS } from "../actionTypes/actionTypes";

const initialState = {
  selectedEvents: [],
  gemInput: "",
};

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        selectedEvents: [...state.selectedEvents, ...action.events],
      };

    case CLEAR_EVENTS:
      return {
        ...state,
        selectedEvents:[],
      };

    case SET_GEMS:
      return {
        ...state,
        gemInput: action.gems,
      };

    case CLEAR_GEMS:
      return {
        ...state,
        gemInput: "",
      };

    default:
      return state;
  }
};
