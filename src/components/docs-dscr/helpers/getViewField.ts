import { IntrospectionField } from 'graphql';

import { getObjectFields } from './getObjectFields';

export const getViewField = (fieldInfo: IntrospectionField) => {
  const fieldString = JSON.stringify(getObjectFields(fieldInfo), null, 2);
  const updatedField = fieldString.replace(/"/g, '');

  return updatedField;
};
