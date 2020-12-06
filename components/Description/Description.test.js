import React from 'react';
import renderer from 'react-test-renderer';
import Description from './Description';

it('Description renders correctly', () => {
  const tree = renderer
    .create(<Description />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});