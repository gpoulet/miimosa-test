import React from 'react';
import renderer from 'react-test-renderer';
import TopBar from './TopBar';
  import * as nextRouter from 'next/router';

it('TopBar with hamburger menu renders correctly', () => {

  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

  const tree = renderer
    .create(<TopBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('TopBar with back arrow renders correctly', () => {

  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({ route: '/details/id-de-test' }));

  const tree = renderer
    .create(<TopBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});