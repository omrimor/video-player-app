import * as React from 'react';
import * as enzyme from 'enzyme';
import { VideoItem } from './VideoItem';

// setup file
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

const setup = () => {
  const props = {
    videoId: 'aaaa',
    videoItem: {
      title: 'test title',
      duration: '11:11'
    };
  };
  const enzymeWrapper = enzyme.shallow(<VideoItem {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

it('renders video item component with title and duration', () => {
  const { enzymeWrapper } = setup();
  expect(enzymeWrapper.find('.video-list__item')).toHaveLength(1);
  expect(enzymeWrapper.find('.video-list__item__title')).toHaveLength(1);
  expect(enzymeWrapper.find('.video-list__item__duration')).toHaveLength(1);
});

it('renders correct title from videoItem prop', () => {
  const { enzymeWrapper, props } = setup();
  expect(enzymeWrapper.find('.video-list__item__title').text()).toEqual(props.videoItem.title);
});

it('renders correct duration from videoItem prop', () => {
  const { enzymeWrapper, props } = setup();
  expect(enzymeWrapper.find('.video-list__item__duration').text()).toEqual(props.videoItem.duration);
});