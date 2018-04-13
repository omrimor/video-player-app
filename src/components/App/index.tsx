import * as React from 'react';
import { connect } from 'react-redux';

import VideoPlayer from '../videoPlayer/VideoPlayer';
import AddVideo from '../addVideo/AddVideo';
import VideoList from '../videoList/VideoList';
import { getVideos, getNextVideo } from '../../reducers/videosReducer';
import * as types from '../../consts/types';

import './App.css';

interface Props {
  videos?: any;
  currentVideoId?: string;
}

export class App extends React.Component<Props> {
  render() {
    const { videos, currentVideoId } = this.props;
    return (
      <div className="wrapper">
        <div className="sidebar">
          <AddVideo />
          <VideoList videos={videos} />
        </div>
        <div className="main">
          <VideoPlayer
            videoId={currentVideoId}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: types.StoreState) => ({
  videos: getVideos(state.videos),
  currentVideoId: getNextVideo(state.videos)
});

export default connect<{}, {}>(mapStateToProps, {})(App);
