import * as React from 'react';
import { connect } from 'react-redux';

import * as types from '../../consts/types';
import { getVideoDetails } from '../../reducers/videosReducer';
import { removeVideoItem } from '../../actions/videos';

import './VideoItem.css';

interface Props {
  videoId: string;
  videoItem?: any;
  removeVideoItem?: any;
}

export function VideoItem ({ videoId, videoItem, removeVideoItem }: Props) {
  return (
    <li className="video-list__item">
      <h5 className="video-list__item__title">{videoItem.title}</h5>
      <div className="video-list__item__additional-info">
        <span className="video-list__item__duration">{videoItem.duration}</span>
        <button
          className="video-list__item__remove-btn"
          onClick={() => removeVideoItem(videoId)}
        >
          👎
        </button>
      </div>
    </li>
  );
}

const mapStateToProps = (state: types.StoreState, ownProps: Props) => ({
  videoItem: getVideoDetails(state.videos, ownProps.videoId)
});

export default connect<{}, {}>(mapStateToProps, { removeVideoItem })(VideoItem);