import React from 'react';
import ProjectDetails from '../components/ProjectDetails';

export default {
  title: 'Project',
  component: ProjectDetails,
};

const Template = (args) => <ProjectDetails {...args} />

export const EnCours = Template.bind({});
EnCours.args = {
  id: "2c714617-c83a-4675-99f4-e7e0d3cd6c92",
  title: "Boulangerie Bio",
  collected: 3000,
  target: 5000,
  status: "in_progress",
  user: {
    first_name: "Harry",
    last_name: "Potter"
  }
};

export const Succes = Template.bind({});
Succes.args = {
  id: "4b0a4ac2-bf4e-483a-ab83-6d08aa1dbfc7",
  title: "La Ferme sans machine",
  collected: 70000,
  target: 40000,
  status: "success",
  user: {
    first_name: "Hermione",
    last_name: "Granger"
  }
};

export const Echec = Template.bind({});
Echec.args = {
  id: "65c72f0b-8906-4504-a428-120b1a741905",
  title: "Fromagerie vegan",
  collected: 200,
  target: 3000,
  status: "failed",
  user: {
    first_name: "Lucius",
    last_name: "Malefoy"
  }
};
