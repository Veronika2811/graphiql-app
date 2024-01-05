import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IntrospectionSchema } from 'graphql';

interface DocsData {
  data: IntrospectionSchema | null;
}

const initialState: DocsData = { data: null };

export const docsSlice = createSlice({
  name: 'documentation',
  initialState,
  reducers: {
    setDocs(
      state: DocsData,
      action: PayloadAction<IntrospectionSchema | null>
    ) {
      state.data = action.payload;
    },
  },
});

export const { setDocs } = docsSlice.actions;
export const docsSliceReducer = docsSlice.reducer;
