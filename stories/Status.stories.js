import React from 'react';
import Status  from '../components/Status';


export default {
  title: 'Status',
  component: Status,
};

const Template = (args) => <Status {...args} />;

export const EnCours = Template.bind({});
EnCours.args = {
  status: "in_progress",
};

export const Succes = Template.bind({});
Succes.args = {
  status: "success",
};

export const Echec = Template.bind({});
Echec.args = {
  status: "failed",
};
