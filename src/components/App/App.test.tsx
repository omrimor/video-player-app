import * as React from 'react';
import * as enzyme from 'enzyme';
import { App } from './index';

// setup file
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

const setup = () => {
  const props = {
    videos: ['123', 'acb'],
    currentVideoId: 'xxx'
  };
  const enzymeWrapper = enzyme.shallow(<App {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

it('renders app wrapper', () => {
  const { enzymeWrapper } = setup();
  expect(enzymeWrapper.find('.wrapper')).toHaveLength(1);
});

it('renders app sidebar', () => {
  const { enzymeWrapper } = setup();
  expect(enzymeWrapper.find('.sidebar')).toHaveLength(1);
  expect(enzymeWrapper.find('Connect(AddVideo)')).toHaveLength(1);
  expect(enzymeWrapper.find('VideoList')).toHaveLength(1);
});

it('renders app main', () => {
  const { enzymeWrapper } = setup();
  expect(enzymeWrapper.find('.main')).toHaveLength(1);
  expect(enzymeWrapper.find('Connect(VideoPlayer)')).toHaveLength(1);
});
