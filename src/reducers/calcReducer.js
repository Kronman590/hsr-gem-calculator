import { SET_EVENTS, CLEAR_EVENTS, SET_MONTHLYPASS, SET_BATTLEPASS, SET_SIMUNIVERSE, SET_SHOPPULLS, SET_ABYSSSTARS, SET_ENDDATE, SET_GEMS, CLEAR_CALC } from "../actionTypes/actionTypes";
import dayjs from 'dayjs';

const today = new Date();
const todayString = dayjs(today.toString())

const initialState = {
  selectedEvents: [],
  monthlyPass: false,
  battlePass: false,
  simUniverse: false,
  shopPulls: false,
  abyssStars: [0,0],
  endDate: todayString,
  gemInput: "",
};

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        selectedEvents: [...action.events],
      };

    case CLEAR_EVENTS:
      return {
        ...state,
        selectedEvents:[],
      };

    case SET_MONTHLYPASS:
      return {
        ...state,
        monthlyPass: action.input,
      };

    case SET_BATTLEPASS:
      return {
        ...state,
        battlePass: action.input,
      };

    case SET_SIMUNIVERSE:
      return {
        ...state,
        simUniverse: action.input,
      };

    case SET_SHOPPULLS:
      return {
        ...state,
        shopPulls: action.input,
      };

    case SET_ABYSSSTARS:
      return {
        ...state,
        abyssStars: action.stars,
      };    

    case SET_ENDDATE:
      return {
        ...state,
        endDate: dayjs(action.date),
      };    

    case SET_GEMS:
      return {
        ...state,
        gemInput: action.gems,
      };

    case CLEAR_CALC:
      return {
        ...state,
        gemInput: "",
      };

    default:
      return state;
  }
};
