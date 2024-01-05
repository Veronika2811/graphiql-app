export interface EditorGraphQL {
  request: string;
  response: string;
  variables: string;
  headers: string;
}

export type EditorOptionsFieldNames = 'variables' | 'headers';

export type EditorFieldNames = 'request' | 'response' | EditorOptionsFieldNames;
