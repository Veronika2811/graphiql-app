import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IntrospectionSchema } from 'graphql';

interface DocsData {
  schema: IntrospectionSchema | null;
  docsButton: boolean;
  docsOpen: boolean;
}

const initialState: DocsData = {
  schema: null,
  docsButton: false,
  docsOpen: false,
};

export const docsSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    setSchema(
      state: DocsData,
      action: PayloadAction<IntrospectionSchema | null>
    ) {
      state.schema = action.payload;
    },
    setButtonStateWithDocs(state: DocsData, action: PayloadAction<boolean>) {
      state.docsButton = action.payload;
    },
    setStateDocsDrawer(state: DocsData, action: PayloadAction<boolean>) {
      state.docsOpen = action.payload;
    },
  },
});

export const { setSchema, setButtonStateWithDocs, setStateDocsDrawer } =
  docsSlice.actions;
export const docsSliceReducer = docsSlice.reducer;
