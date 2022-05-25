import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'


const initialState = {
  saving: "idle",
  content: [],
  active_menu: null,
  dropZoneValues: null,
  modal: {
    title: null,
    content: null,
    open: false
  }
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
  reducers: {
    setActiveMenu(state, action) {
      state.active_menu = action.payload === state.active_menu ? null : action.payload
    },
    openModal(state, action) {
      state.modal = {
        ...action.payload,
        open: true
      }
    },
    closeModal(state) {
      state.modal = initialState.modal
    },
    setDropZone(state, action) {
      state.dropZoneValues = action.payload
    },
    addElement(state, action) {}
  },
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
  setActiveMenu,
  setDropZone,
  openModal,
  closeModal,
  addContent,
  addElement
} = editorSlice.actions
export {
  setSave,
}
export default editorSlice.reducer