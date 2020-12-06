import React from 'react';
import renderer from 'react-test-renderer';
import Photo from './Photo';

it('Photo renders correctly', () => {
  const tree = renderer
    .create(<Photo id="test" label="Titre" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Photo with link renders correctly', () => {
  const tree = renderer
    .create(<Photo href="/link" label="titre de la photo" id="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});