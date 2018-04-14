import * as Immutable from 'seamless-immutable';
import * as moment from 'moment';

import * as consts from '../consts/actionTypes';
import * as types from '../consts/types';

const initState = Immutable({});

export default (state = initState, action: any) => {
  switch (action.type) {
    case consts.ADD_VIDEO_ITEM: {
      const videoItem = normelizeVideoItem(action.payload.video);
      return state.set(videoItem.id, videoItem);
    }
    case consts.REMOVE_VIDEO_ITEM: {
      return state.without((value, key) => key === action.payload.videoId);
    }
    case consts.SET_NEXT_VIDEO_ITEM: {
      const firstInLine = Object.keys(state)[0];
      return state.without((value, key) => key === firstInLine);
    }
    default:
      return state;
  }
};

// Helpers
/**
 * 
 * @param video row from youTube api
 * @return {} deconstruction of the needed parts
 */
function normelizeVideoItem (video: types.VideoItem) {
  const { id, snippet: { title }, contentDetails: { duration } } = video;
  return {
    id,
    title,
    duration: parseDuration(duration)
  };
}

function parseDuration(duration: string) {
  return `
  ${stringifyNumber(moment.duration(duration).minutes())}
  :
  ${stringifyNumber(moment.duration(duration).seconds())}
  `;
}

function stringifyNumber (num: number) {
  return num > 10 ? `${num}` : `0${num}`;

}

// Selectors
export const getNextVideo = (videos: any) => Object.keys(videos)[0] || null;
export const getVideos = (videos: any) => Object.keys(videos);
export const getVideoDetails = (videos: any, id: string) => videos[id];