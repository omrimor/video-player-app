import * as React from 'react';
import * as enzyme from 'enzyme';
import { VideoList } from './VideoList';

// setup file
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

const setup = (videos: Array<string>) => {
  const props = {
    videos
  };
  const enzymeWrapper = enzyme.shallow(<VideoList {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

it('renders nothing if no videos array provided', () => {
  const { enzymeWrapper } = setup([]);
  expect(enzymeWrapper.find('.video-list')).toHaveLength(0);
});

it('renders ul videos array provided', () => {
  const { enzymeWrapper } = setup(['abcd']);
  expect(enzymeWrapper.find('.video-list')).toHaveLength(1);
});

it('renders li video items number as the array length provided', () => {
  const videoMockArray = ['abcd', 'dddd', 'xxx'];
  const { enzymeWrapper } = setup(videoMockArray);
  expect(enzymeWrapper.find('Connect(VideoItem)')).toHaveLength(videoMockArray.length);
});