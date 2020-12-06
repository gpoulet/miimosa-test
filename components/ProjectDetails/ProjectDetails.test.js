import React from 'react';
import renderer from 'react-test-renderer';
import ProjectDetails from './ProjectDetails';

it('ProjectDetails in progress renders correctly', () => {
  const tree = renderer
    .create(
      <ProjectDetails
      id="test"
      status="in_progress"
      collected={15000}
      target={25000}
      description="coucou"
      title="Boulangerie bio"
      imageUrl="/myUrl.png"
      user={{ first_name: "Harry", last_name: "Potter"}}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('ProjectDetails failed renders correctly', () => {
  const tree = renderer
    .create(
      <ProjectDetails
      id="test"
      status="failed"
      collected={15}
      target={8000}
      description="venez"
      title="Brasserie du midi"
      imageUrl="/myBeer.png"
      user={{ first_name: "Lucius", last_name: "Malefoy"}}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('ProjectDetails success renders correctly', () => {
  const tree = renderer
    .create(
      <ProjectDetails
      id="test"
      status="success"
      collected={10000}
      target={8000}
      description="venez"
      title="Cheese'up Fromagerie responsable"
      imageUrl="/chees.png"
      user={{ first_name: "Hermione", last_name: "Granger"}}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});