import React from 'react';
import renderer from 'react-test-renderer';
import Project from './Project';

it('Project in progress renders correctly', () => {
  const tree = renderer
    .create(<Project
      id="test"
      collected={2000}
      target={5000}
      status="in_progress"
      description="lorem ipsum"
      title="La ferme magique"
      user={{first_name: "Albus", last_name: "Dumbledore"}}
      imageUrl="/fermemagique.jpg"
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Project failed renders correctly', () => {
  const tree = renderer
    .create(<Project
      id="test"
      collected={34}
      target={5000}
      status="failed"
      description="lorem ipsum bla"
      title="La ferme sans machine"
      user={{first_name: "Abelforth", last_name: "Dumbledore"}}
      imageUrl="/fermemagique.jpg"
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Project success renders correctly', () => {
  const tree = renderer
    .create(<Project
      id="test"
      collected={10000}
      target={8000}
      status="success"
      description="lorem ipsum bla bla"
      title="La ferme sans âme"
      user={{first_name: "Tom", last_name: "Jedusor"}}
      imageUrl="/fermesansame.png"
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});