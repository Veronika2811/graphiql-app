import {
  docsSliceReducer,
  setButtonStateWithDocs,
  setSchema,
  setStateDocsDrawer,
} from './documentation';

describe('slice documentationReducer', () => {
  const initialState = {
    schema: null,
    docsButton: false,
    docsOpen: false,
  };

  it('should handle setSchema action', () => {
    const state = docsSliceReducer(initialState, setSchema('New Schema'));
    expect(state.schema).toEqual('New Schema');
  });

  it('should handle setButtonStateWithDocs action', () => {
    const state = docsSliceReducer(initialState, setButtonStateWithDocs(true));
    expect(state.docsButton).toEqual(true);
  });

  it('should handle setButtonStateWithDocs action', () => {
    const state = docsSliceReducer(initialState, setStateDocsDrawer(true));
    expect(state.docsOpen).toEqual(true);
  });
});
