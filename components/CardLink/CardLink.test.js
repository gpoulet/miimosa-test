import React from 'react';
import renderer from 'react-test-renderer';
import CardLink from './CardLink';

it('CardLink renders correctly', () => {
  const tree = renderer
    .create(<CardLink href="/test"label="Lien de test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});