import React from 'react';
import { action } from '@storybook/addon-actions';

import TextField from './TextField';

export default {
  component: TextField,
  title: 'TextField',
  name: 'TextField-test'
};

export const Default = () => <TextField value={'teste'} />;
