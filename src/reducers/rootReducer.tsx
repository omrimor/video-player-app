import { combineReducers } from 'redux';

import videosReducer from './videosReducer';
import networkReducer from './networkReducer';

const rootReducer = combineReducers({
  videos: videosReducer,
  shared: combineReducers({
    networkReqests: networkReducer
  })
});

export default rootReducer;