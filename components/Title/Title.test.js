import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';

it('Title renders correctly', () => {
  const tree = renderer
    .create(<Title title="Exemple de titre" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});