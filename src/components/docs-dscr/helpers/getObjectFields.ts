import { IntrospectionField, IntrospectionNamedTypeRef } from 'graphql';

export const getObjectFields = (fieldInfo: IntrospectionField) => {
  const obj = {} as Record<string, string>;
  fieldInfo.args.forEach((arg) => {
    const type = arg.type as IntrospectionNamedTypeRef;
    obj[arg.name] = type.name;
  });
  return obj;
};
