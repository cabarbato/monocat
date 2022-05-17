import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'


const initialState = {
  saving: "idle"
};

const setSave = createAsyncThunk(
  process.env.REACT_APP_ENDPOINT,
  async (is_submitted, thunkAPI, _) => {
    // write state to DB
  }
)

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSave.fulfilled, (state, action) => {
      if (action.payload) {
        state.saving = "success"
      }
    })
    builder.addCase(setSave.rejected, (state, action) => {
      state.saving = "fail"
    })
  }
})

export const {
  setCurrentQuestion,
  setScore,
  reset
} = editorSlice.actions
export {
  setSave
}
export default editorSlice.reducer