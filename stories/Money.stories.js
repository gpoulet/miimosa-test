import React from 'react';
import Money  from '../components/Money';


export default {
  title: 'Money',
  component: Money,
};

const Template = (args) => <Money {...args} />;

export const EnCours = Template.bind({});
EnCours.args = {
  collected: 5000,
  target: 12000,
  status: "in_progress",
};

export const Succes = Template.bind({});
Succes.args = {
  collected: 10000,
  target: 8000,
  status: "success",
};

export const Echec = Template.bind({});
Echec.args = {
  collected: 150,
  target: 5000,
  status: "failed",
};
