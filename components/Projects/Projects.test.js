import React from 'react';
import renderer from 'react-test-renderer';
import Projects from './Projects';

it('Projects error renders correctly', () => {
  const tree = renderer
    .create(<Projects error={true} loading={false} data={undefined} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Projects loading renders correctly', () => {
  const tree = renderer
    .create(<Projects error={false} loading={true} data={undefined}  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


 const data = {
  "projects": [
    {
      "collected": 12,
      "description": "",
      "id": "2c714617-c83a-4675-99f4-e7e0d3cd6c92",
      "image_url": "",
      "status": "failed",
      "target": 1000,
      "title": "Boulangerie HiTekt",
      "user": {
        "first_name": "Daïsy",
        "last_name": "Artémis"
      }
    },
    {
      "collected": 15000,
      "description": "",
      "id": "c6d6f6f9-07d8-4540-87a7-3b8ff8869f55",
      "image_url": "",
      "status": "success",
      "target": 15000,
      "title": "Bar smoothie Bio",
      "user": {
        "first_name": "Lancelot",
        "last_name": "Little Finger"
      }
    },
    {
      "collected": 12000,
      "description": "",
      "id": "65c72f0b-8906-4504-a428-120b1a741905",
      "image_url": "",
      "status": "in_progress",
      "target": 15000,
      "title": "McDonald's sans conservateur",
      "user": {
        "first_name": "Hagrid",
        "last_name": "Potter"
      }
    },
  ]
}

it('Projects data renders correctly', () => {
  const tree = renderer
    .create(<Projects error={false} loading={false} data={data}  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});