import axios from 'axios';

import * as consts from '../consts/actionTypes';
import { startNetwork, endNetwork } from '../actions/ui';

const youTubeSearchMiddleware = (store: object) => (next: any) => (action: any) => {
  if (action.type !== consts.YOU_TUBE_API_REQUEST) {
    return next(action);
  }
  handleRequests(store, action, next);
};

export default youTubeSearchMiddleware;

// constants
// For simplecity declared here
const YOU_TUBE_BASE_URL: string = 'https://www.googleapis.com/youtube/v3/videos';
const YOU_TUBE_KEY: string = 'AIzaSyBfA24hvWAwhbsda8LFpGPpO8cf31i7w_4';
const YOU_TUBE_PART: string = 'snippet,contentDetails';

// Helpers
function handleRequests (store: any, action: any, next: any) {
  const { dispatch } = store;
  const { q } = action.payload;
  const { name, onSuccess, onError } = action.meta;
  dispatch(startNetwork(name));

  axios.get(YOU_TUBE_BASE_URL, {
    params: {
      part: YOU_TUBE_PART,
      key: YOU_TUBE_KEY,
      id: q
    }
  })
  .then((response) => {
    const singleVideo = response.data.items[0];
    dispatch(onSuccess(singleVideo));
    dispatch(endNetwork(name));

  })
  .catch((error) => {
    dispatch(onError(name, error));
    dispatch(endNetwork(name));
  });
}