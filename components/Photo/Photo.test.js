import React from 'react';
import renderer from 'react-test-renderer';
import Photo from './Photo';

it('Photo renders correctly', () => {
  const tree = renderer
    .create(<Photo id="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});