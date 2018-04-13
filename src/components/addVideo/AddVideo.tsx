import * as React from 'react';
import { connect } from 'react-redux';

import Spinner from '../common/Spinner';
import { getRequestsCount } from '../../reducers/networkReducer';
import * as types from '../../consts/types';
import * as actions from '../../actions/videos';
import './AddVideo.css';

interface Props {
  fetchYouTubeVideo?: any;
  pending?: boolean;
}

interface State {
  q: string;
}

export class AddVideo extends React.Component<Props, State> {
  constructor (props: Object) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      q: ''
    };
  }

  handleKeyPress (e: any) {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  handleChange (e: any) {
    this.setState({q: e.target.value});
  }

  handleClick () {
    const { fetchYouTubeVideo } = this.props;
    fetchYouTubeVideo(extractYuoTubeId(this.state.q));
    this.setState({ q: '' });
  }

  renderButton () {
    const { pending } = this.props;
    return (
      pending
        ? <Spinner />
        : (
        <button
          className="search-bar__btn"
          key="btn"
          type="button"
          onClick={this.handleClick}
        >
          Add
        </button>
        )
    );
  }

  render() {
    return (
      <div className="search-bar">
        <div className="search-bar__intro">
          Type you favorite youTube videos url's and create your own playlist 👇
        </div>
        <input
          className="search-bar__input"
          key="input"
          type="text"
          placeholder="E.g https://www.youtube.com/watch?v=l4L3ALiWrrg"
          value={this.state.q}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = (state: types.StoreState) => ({
  pending: getRequestsCount(state.shared.networkReqests, 'fetchYouTubeVideo') > 0,
});

export default connect<{}, {}>(mapStateToProps, { ...actions })(AddVideo);

// Helpers
/**
 * Took the naive approch in which the user
 * will enter an exact youTube url with exact one query param (?v= ...)
 * @param input youtube url
 * @returns youTube video id
 */
function extractYuoTubeId(input: string) {
  return input.slice(input.indexOf('?') + 1).split('=')[1];
}