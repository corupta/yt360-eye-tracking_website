// import { combineReducers } from 'redux';
import {
  FETCH_DATA // , LOAD_READY
} from './Actions';

export function rootReducer(state = { loading: true }, action) {
  switch (action.type) {
  case FETCH_DATA:
  {
    return {
      data: action.data,
      loading: false
    }
    // const galMap = {};
    // action.data.galleries.forEach((gallery, i) => {
    //   galMap[gallery.path] = i;
    // });
    // /* const tagMap = {};
    // action.data.tags.forEach((tag, i) => {
    //   tagMap[tag.path]
    // }); */
    // const itemMap = {};
    // action.data.obj.forEach((item, i) => {
    //   itemMap[item.id] = i;
    // });
    // return {
    //   data: action.data,
    //   galMap,
    //   itemMap,
    //   loading: false
    // };
  }
  default:
    return state;
  }
}

/*
function data(state = {}, action) {
  switch (action.type) {
  case FETCH_DATA: {
    const galMap = {};
    forEach() //todo
    return {...action.data};
  }
  default:
    return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
  case LOAD_READY:
    return true;
  default:
    return state;
  }
}

function galleryMap(state = {}, action) {
  switch (action.type) {
    case MAP_DATA:
    {
      const newState = {};

    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data,
  loading
});

export default rootReducer;
*/
