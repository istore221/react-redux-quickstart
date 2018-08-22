import {APP_LOAD} from '../constants/common';

const defaultState = {
  isLoaded: false
};



export default (state = defaultState, action) => {

  switch (action.type) {

    case APP_LOAD:
      return {
        ...state,
        appLoaded: true
      };
    default:
        return state;
  }

}
