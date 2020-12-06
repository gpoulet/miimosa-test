import React from 'react';
import renderer from 'react-test-renderer';
import TopBar from './TopBar';

it('TopBar renders correctly', () => {
  const tree = renderer
    .create(<TopBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});