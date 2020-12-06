import React from 'react';
import renderer from 'react-test-renderer';
import Money from './Money';

it('Money renders correctly', () => {
  const tree = renderer
    .create(<Money collected={15000} target={20000} status="in_progess" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});