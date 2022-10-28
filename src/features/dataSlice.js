import { createSlice } from '@reduxjs/toolkit'
import { actions } from '../features/actions'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    reactHighlightData: false,
    reactHighlightDataIsLoading: true,
    reactOpacityData: 0.6,
    reactOpacityIsLoading: true,
    reactScaleData: [20,20,20],
    reactScaleIsLoading: true,
    
    htmlHighlightData: false,
    htmlHighlightDataIsLoading: true,
    htmlOpacityData: 0.6,
    htmlOpacityIsLoading: true,
    htmlScaleData: [20,20,20],
    htmlScaleIsLoading: true,
    
    cssHighlightData: false,
    cssHighlightDataIsLoading: true,
    cssOpacityData: 0.6,
    cssOpacityIsLoading: true,
    cssScaleData: [20,20,20],
    cssScaleIsLoading: true,
    
    javascriptHighlightData: false,
    javascriptHighlightDataIsLoading: true,
    javascriptOpacityData: 0.6,
    javascriptOpacityIsLoading: true,
    javascriptScaleData: [20,20,20],
    javascriptScaleIsLoading: true,
    
    expressHighlightData: false,
    expressHighlightDataIsLoading: true,
    expressOpacityData: 0.6,
    expressOpacityIsLoading: true,
    expressScaleData: [20,20,20],
    expressScaleIsLoading: true,
    
    nodeHighlightData: false,
    nodeHighlightDataIsLoading: true,
    nodeOpacityData: 0.6,
    nodeOpacityIsLoading: true,
    nodeScaleData: [20,20,20],
    nodeScaleIsLoading: true,
    
    postgresHighlightData: false,
    postgresHighlightDataIsLoading: true,
    postgresOpacityData: 0.6,
    postgresOpacityIsLoading: true,
    postgresScaleData: [20,20,20],
    postgresScaleIsLoading: true,
    
    reduxHighlightData: false,
    reduxHighlightDataIsLoading: true,
    reduxOpacityData: 0.6,
    reduxOpacityIsLoading: true,
    reduxScaleData: [20,20,20],
    reduxScaleIsLoading: true,
    
  },
  reducers: {
  },
  extraReducers: {

    [actions.reactHighlight.pending]: (state, action) => {
      state.reactHighlightDataIsLoading = true;
    },
    [actions.reactHighlight.fulfilled]: (state, action) => {
      state.reactHighlightData = action.payload;
      state.reactHighlightDataIsLoading = false;
    },
    [actions.reactHighlight.rejected]: (state, action) => {
      state.reactHighlightDataIsLoading = true;
    },

    [actions.reactOpacity.pending]: (state, action) => {
      state.reactOpacityIsLoading = true;
    },
    [actions.reactOpacity.fulfilled]: (state, action) => {
      state.reactOpacityData = action.payload;
      state.reactOpacityIsLoading = false;
    },
    [actions.reactOpacity.rejected]: (state, action) => {
      state.reactOpacityIsLoading = true;
    },

    [actions.reactScale.pending]: (state, action) => {
      state.reactScaleIsLoading = true;
    },
    [actions.reactScale.fulfilled]: (state, action) => {
      state.reactScaleData = action.payload;
      state.reactScaleIsLoading = false;
    },
    [actions.reactScale.rejected]: (state, action) => {
      state.reactScaleIsLoading = true;
    },


    [actions.htmlHighlight.pending]: (state, action) => {
      state.htmlHighlightDataIsLoading = true;
    },
    [actions.htmlHighlight.fulfilled]: (state, action) => {
      state.htmlHighlightData = action.payload;
      state.htmlHighlightDataIsLoading = false;
    },
    [actions.htmlHighlight.rejected]: (state, action) => {
      state.htmlHighlightDataIsLoading = true;
    },

    [actions.htmlOpacity.pending]: (state, action) => {
      state.htmlOpacityIsLoading = true;
    },
    [actions.htmlOpacity.fulfilled]: (state, action) => {
      state.htmlOpacityData = action.payload;
      state.htmlOpacityIsLoading = false;
    },
    [actions.htmlOpacity.rejected]: (state, action) => {
      state.htmlOpacityIsLoading = true;
    },

    [actions.htmlScale.pending]: (state, action) => {
      state.htmlScaleIsLoading = true;
    },
    [actions.htmlScale.fulfilled]: (state, action) => {
      state.htmlScaleData = action.payload;
      state.htmlScaleIsLoading = false;
    },
    [actions.htmlScale.rejected]: (state, action) => {
      state.htmlScaleIsLoading = true;
    },


    [actions.cssHighlight.pending]: (state, action) => {
      state.cssHighlightDataIsLoading = true;
    },
    [actions.cssHighlight.fulfilled]: (state, action) => {
      state.cssHighlightData = action.payload;
      state.cssHighlightDataIsLoading = false;
    },
    [actions.cssHighlight.rejected]: (state, action) => {
      state.cssHighlightDataIsLoading = true;
    },

    [actions.cssOpacity.pending]: (state, action) => {
      state.cssOpacityIsLoading = true;
    },
    [actions.cssOpacity.fulfilled]: (state, action) => {
      state.cssOpacityData = action.payload;
      state.cssOpacityIsLoading = false;
    },
    [actions.cssOpacity.rejected]: (state, action) => {
      state.cssOpacityIsLoading = true;
    },

    [actions.cssScale.pending]: (state, action) => {
      state.cssScaleIsLoading = true;
    },
    [actions.cssScale.fulfilled]: (state, action) => {
      state.cssScaleData = action.payload;
      state.cssScaleIsLoading = false;
    },
    [actions.cssScale.rejected]: (state, action) => {
      state.cssScaleIsLoading = true;
    },


    [actions.javascriptHighlight.pending]: (state, action) => {
      state.javascriptHighlightDataIsLoading = true;
    },
    [actions.javascriptHighlight.fulfilled]: (state, action) => {
      state.javascriptHighlightData = action.payload;
      state.javascriptHighlightDataIsLoading = false;
    },
    [actions.javascriptHighlight.rejected]: (state, action) => {
      state.javascriptHighlightDataIsLoading = true;
    },

    [actions.javascriptOpacity.pending]: (state, action) => {
      state.javascriptOpacityIsLoading = true;
    },
    [actions.javascriptOpacity.fulfilled]: (state, action) => {
      state.javascriptOpacityData = action.payload;
      state.javascriptOpacityIsLoading = false;
    },
    [actions.javascriptOpacity.rejected]: (state, action) => {
      state.javascriptOpacityIsLoading = true;
    },

    [actions.javascriptScale.pending]: (state, action) => {
      state.javascriptScaleIsLoading = true;
    },
    [actions.javascriptScale.fulfilled]: (state, action) => {
      state.javascriptScaleData = action.payload;
      state.javascriptScaleIsLoading = false;
    },
    [actions.javascriptScale.rejected]: (state, action) => {
      state.javascriptScaleIsLoading = true;
    },


    [actions.expressHighlight.pending]: (state, action) => {
      state.expressHighlightDataIsLoading = true;
    },
    [actions.expressHighlight.fulfilled]: (state, action) => {
      state.expressHighlightData = action.payload;
      state.expressHighlightDataIsLoading = false;
    },
    [actions.expressHighlight.rejected]: (state, action) => {
      state.expressHighlightDataIsLoading = true;
    },

    [actions.expressOpacity.pending]: (state, action) => {
      state.expressOpacityIsLoading = true;
    },
    [actions.expressOpacity.fulfilled]: (state, action) => {
      state.expressOpacityData = action.payload;
      state.expressOpacityIsLoading = false;
    },
    [actions.expressOpacity.rejected]: (state, action) => {
      state.expressOpacityIsLoading = true;
    },

    [actions.expressScale.pending]: (state, action) => {
      state.expressScaleIsLoading = true;
    },
    [actions.expressScale.fulfilled]: (state, action) => {
      state.expressScaleData = action.payload;
      state.expressScaleIsLoading = false;
    },
    [actions.expressScale.rejected]: (state, action) => {
      state.expressScaleIsLoading = true;
    },



    [actions.nodeHighlight.pending]: (state, action) => {
      state.nodeHighlightDataIsLoading = true;
    },
    [actions.nodeHighlight.fulfilled]: (state, action) => {
      state.nodeHighlightData = action.payload;
      state.nodeHighlightDataIsLoading = false;
    },
    [actions.nodeHighlight.rejected]: (state, action) => {
      state.nodeHighlightDataIsLoading = true;
    },

    [actions.nodeOpacity.pending]: (state, action) => {
      state.nodeOpacityIsLoading = true;
    },
    [actions.nodeOpacity.fulfilled]: (state, action) => {
      state.nodeOpacityData = action.payload;
      state.nodeOpacityIsLoading = false;
    },
    [actions.nodeOpacity.rejected]: (state, action) => {
      state.nodeOpacityIsLoading = true;
    },


    [actions.nodeScale.pending]: (state, action) => {
      state.nodeScaleIsLoading = true;
    },
    [actions.nodeScale.fulfilled]: (state, action) => {
      state.nodeScaleData = action.payload;
      state.nodeScaleIsLoading = false;
    },
    [actions.nodeScale.rejected]: (state, action) => {
      state.nodeScaleIsLoading = true;
    },


    [actions.postgresHighlight.pending]: (state, action) => {
      state.postgresHighlightDataIsLoading = true;
    },
    [actions.postgresHighlight.fulfilled]: (state, action) => {
      state.postgresHighlightData = action.payload;
      state.postgresHighlightDataIsLoading = false;
    },
    [actions.postgresHighlight.rejected]: (state, action) => {
      state.postgresHighlightDataIsLoading = true;
    },

    [actions.postgresOpacity.pending]: (state, action) => {
      state.postgresOpacityIsLoading = true;
    },
    [actions.postgresOpacity.fulfilled]: (state, action) => {
      state.postgresOpacityData = action.payload;
      state.postgresOpacityIsLoading = false;
    },
    [actions.postgresOpacity.rejected]: (state, action) => {
      state.postgresOpacityIsLoading = true;
    },

    [actions.postgresScale.pending]: (state, action) => {
      state.postgresScaleIsLoading = true;
    },
    [actions.postgresScale.fulfilled]: (state, action) => {
      state.postgresScaleData = action.payload;
      state.postgresScaleIsLoading = false;
    },
    [actions.postgresScale.rejected]: (state, action) => {
      state.postgresScaleIsLoading = true;
    },


    [actions.reduxHighlight.pending]: (state, action) => {
      state.reduxHighlightDataIsLoading = true;
    },
    [actions.reduxHighlight.fulfilled]: (state, action) => {
      state.reduxHighlightData = action.payload;
      state.reduxHighlightDataIsLoading = false;
    },
    [actions.reduxHighlight.rejected]: (state, action) => {
      state.reduxHighlightDataIsLoading = true;
    },

    [actions.reduxOpacity.pending]: (state, action) => {
      state.reduxOpacityIsLoading = true;
    },
    [actions.reduxOpacity.fulfilled]: (state, action) => {
      state.reduxOpacityData = action.payload;
      state.reduxOpacityIsLoading = false;
    },
    [actions.reduxOpacity.rejected]: (state, action) => {
      state.reduxOpacityIsLoading = true;
    },

    [actions.reduxScale.pending]: (state, action) => {
      state.reduxScaleIsLoading = true;
    },
    [actions.reduxScale.fulfilled]: (state, action) => {
      state.reduxScaleData = action.payload;
      state.reduxScaleIsLoading = false;
    },
    [actions.reduxScale.rejected]: (state, action) => {
      state.reduxScaleIsLoading = true;
    },

  }
})

export default dataSlice.reducer;