import { IntrospectionObjectType, IntrospectionType } from 'graphql';

export const isObjectTypeField = (
  schema: IntrospectionType | undefined
): schema is IntrospectionObjectType => {
  if (!schema || !('fields' in schema)) {
    return false;
  }

  return true;
};
