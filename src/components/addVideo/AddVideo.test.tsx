import * as React from 'react';
import * as enzyme from 'enzyme';
import { AddVideo } from './AddVideo';

// setup file
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter() });

const setup = () => {
  const props = {
    fetchYouTubeVideo: jest.fn();
    pending: false,
    videoId: 'aaaa'
  };
  const enzymeWrapper = enzyme.shallow(<AddVideo {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

it('show spinner when pending the ajax request', () => {
  const { enzymeWrapper } = setup();
  enzymeWrapper.setProps({pending: true});
  expect(enzymeWrapper.find('.search-bar__btn')).toHaveLength(0);
  expect(enzymeWrapper.find('Spinner')).toHaveLength(1);
});

it('add button on click trigger actionCreator', () => {
  const { enzymeWrapper, props } = setup();
  expect(enzymeWrapper.find('.search-bar__btn')).toHaveLength(1);
  enzymeWrapper.find('.search-bar__btn').simulate('click');
  expect(props.fetchYouTubeVideo).toHaveBeenCalled();
});

it('pressing enter key on input field trigger actionCreator', () => {
  const { enzymeWrapper, props } = setup();
  expect(enzymeWrapper.find('.search-bar__input')).toHaveLength(1);
  enzymeWrapper.find('.search-bar__input').simulate('keypress', {key: 'Enter'});
  expect(props.fetchYouTubeVideo).toHaveBeenCalled();
});