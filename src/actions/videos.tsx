import * as consts from '../consts/actionTypes';
import { setNetworkErrors } from './ui';

export const addVideoItem = (video: any) => ({
  type: consts.ADD_VIDEO_ITEM,
  payload: {
    video
  }
});

export const removeVideoItem = (videoId: string) => ({
  type: consts.REMOVE_VIDEO_ITEM,
  payload: {
    videoId
  }
});

export const setNextVideoItem = () => ({
  type: consts.SET_NEXT_VIDEO_ITEM
});

export const fetchYouTubeVideo = (q: string) => ({
  type: consts.YOU_TUBE_API_REQUEST,
  payload: { q },
  meta: {
    name: 'fetchYouTubeVideo',
    onSuccess: (data: object) => [
      addVideoItem(data)
    ],
    onError: (name: string, error: any) => [
      setNetworkErrors(name, error)
    ]
  }
});