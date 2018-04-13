import * as React from 'react';
import * as enzyme from 'enzyme';
import { VideoPlayer } from './VideoPlayer';

// setup file
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

const setup = (videoId: any) => {
  const props = {
    videoId,
    setNextVideoItem: jest.fn()
  };
  const enzymeWrapper = enzyme.shallow(<VideoPlayer {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

it('renders placeholder if no videoId provided', () => {
  const { enzymeWrapper } = setup(null);
  expect(enzymeWrapper.find('.video-player-placeholder').text()).toEqual('Nothing to see yet ... 🙈');
});

it('renders youTube video player when videoId provided', () => {
  const { enzymeWrapper } = setup('ASCCVFF');
  expect(enzymeWrapper.find('YouTube')).toHaveLength(1);
});