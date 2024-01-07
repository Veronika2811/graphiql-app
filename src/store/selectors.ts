import { RootState } from 'store';

export const selectSchema = (state: RootState) => state.docs.schema;
export const selectStateDocs = (state: RootState) => state.docs.docsButton;
export const selectStateDocsDrawer = (state: RootState) => state.docs.docsOpen;
