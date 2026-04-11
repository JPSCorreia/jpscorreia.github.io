import { createAsyncThunk } from "@reduxjs/toolkit";

export const actions = {

  reactHighlight: createAsyncThunk(
    'data/reactHighlight', (payload) => { return payload }
  ),
  cssHighlight: createAsyncThunk(
    'data/cssHighlight', (payload) => { return payload }
  ),
  typescriptHighlight: createAsyncThunk(
    'data/typescriptHighlight', (payload) => { return payload }
  ),
  javascriptHighlight: createAsyncThunk(
    'data/javascriptHighlight', (payload) => { return payload }
  ),
  framerHighlight: createAsyncThunk(
    'data/framerHighlight', (payload) => { return payload }
  ),
  nodeHighlight: createAsyncThunk(
    'data/nodeHighlight', (payload) => { return payload }
  ),
  tailwindHighlight: createAsyncThunk(
    'data/tailwindHighlight', (payload) => { return payload }
  ),
  reduxHighlight: createAsyncThunk(
    'data/reduxHighlight', (payload) => { return payload }
  ),

  reactOpacity: createAsyncThunk(
    'data/reactOpacity', (payload) => { return payload }
  ),
  cssOpacity: createAsyncThunk(
    'data/cssOpacity', (payload) => { return payload }
  ),
  typescriptOpacity: createAsyncThunk(
    'data/typescriptOpacity', (payload) => { return payload }
  ),
  javascriptOpacity: createAsyncThunk(
    'data/javascriptOpacity', (payload) => { return payload }
  ),
  framerOpacity: createAsyncThunk(
    'data/framerOpacity', (payload) => { return payload }
  ),
  nodeOpacity: createAsyncThunk(
    'data/nodeOpacity', (payload) => { return payload }
  ),
  tailwindOpacity: createAsyncThunk(
    'data/tailwindOpacity', (payload) => { return payload }
  ),
  reduxOpacity: createAsyncThunk(
    'data/reduxOpacity', (payload) => { return payload }
  ),

  reactScale: createAsyncThunk(
    'data/reactScale', (payload) => { return payload }
  ),
  cssScale: createAsyncThunk(
    'data/cssScale', (payload) => { return payload }
  ),
  typescriptScale: createAsyncThunk(
    'data/typescriptScale', (payload) => { return payload }
  ),
  javascriptScale: createAsyncThunk(
    'data/javascriptScale', (payload) => { return payload }
  ),
  framerScale: createAsyncThunk(
    'data/framerScale', (payload) => { return payload }
  ),
  nodeScale: createAsyncThunk(
    'data/nodeScale', (payload) => { return payload }
  ),
  tailwindScale: createAsyncThunk(
    'data/tailwindScale', (payload) => { return payload }
  ),
  reduxScale: createAsyncThunk(
    'data/reduxScale', (payload) => { return payload }
  ),
}
