import React from 'react';
import renderer from 'react-test-renderer';
import Status from './Status';

it('Status success renders correctly', () => {
  const tree = renderer
    .create(<Status status="success" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Status in_progress renders correctly', () => {
  const tree = renderer
    .create(<Status status="in_progress" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Status failed renders correctly', () => {
  const tree = renderer
    .create(<Status status="failed" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});