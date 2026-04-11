import { createSlice } from '@reduxjs/toolkit'
import { actions } from '../features/actions'

const makeTechState = (name) => ({
  [`${name}HighlightData`]: false,
  [`${name}HighlightDataIsLoading`]: true,
  [`${name}OpacityData`]: 0.6,
  [`${name}OpacityIsLoading`]: true,
  [`${name}ScaleData`]: [20, 20, 20],
  [`${name}ScaleIsLoading`]: true,
});

const makeTechReducers = (name) => ({
  [actions[`${name}Highlight`].pending]:   (state) => { state[`${name}HighlightDataIsLoading`] = true; },
  [actions[`${name}Highlight`].fulfilled]: (state, action) => { state[`${name}HighlightData`] = action.payload; state[`${name}HighlightDataIsLoading`] = false; },
  [actions[`${name}Highlight`].rejected]:  (state) => { state[`${name}HighlightDataIsLoading`] = true; },

  [actions[`${name}Opacity`].pending]:   (state) => { state[`${name}OpacityIsLoading`] = true; },
  [actions[`${name}Opacity`].fulfilled]: (state, action) => { state[`${name}OpacityData`] = action.payload; state[`${name}OpacityIsLoading`] = false; },
  [actions[`${name}Opacity`].rejected]:  (state) => { state[`${name}OpacityIsLoading`] = true; },

  [actions[`${name}Scale`].pending]:   (state) => { state[`${name}ScaleIsLoading`] = true; },
  [actions[`${name}Scale`].fulfilled]: (state, action) => { state[`${name}ScaleData`] = action.payload; state[`${name}ScaleIsLoading`] = false; },
  [actions[`${name}Scale`].rejected]:  (state) => { state[`${name}ScaleIsLoading`] = true; },
});

const TECHS = ['react', 'css', 'typescript', 'javascript', 'framer', 'node', 'tailwind', 'redux'];

export const dataSlice = createSlice({
  name: 'data',
  initialState: TECHS.reduce((acc, t) => ({ ...acc, ...makeTechState(t) }), {}),
  reducers: {},
  extraReducers: TECHS.reduce((acc, t) => ({ ...acc, ...makeTechReducers(t) }), {}),
});

export default dataSlice.reducer;
