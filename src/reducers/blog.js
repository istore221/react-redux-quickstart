import {APP_LOAD,GET_POSTS,GET_COMMENTS} from '../constants/common';

const defaultState = {
  comments: [],
  posts: []
};



export default (state = defaultState, action) => {

  switch (action.type) {

    case `${GET_POSTS}_PENDING`:
    return {
      ...state,
      posts: []
    };
    case `${GET_POSTS}_FULFILLED`:
    return {
      ...state,
      posts: action.payload.data
    };
    case `${GET_POSTS}_REJECTED`:
    return {
      ...state,
      posts:[]

    };


    case `${GET_COMMENTS}_PENDING`:
    return {
      ...state,
      comments: []
    };
    case `${GET_COMMENTS}_FULFILLED`:
    return {
      ...state,
      comments: action.payload.data
    };
    case `${GET_COMMENTS}_REJECTED`:
    return {
      ...state,
      comments:[]

    };

    default:
        return state;
  }

}
