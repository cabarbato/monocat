import { createSlice } from '@reduxjs/toolkit'
  
const initialState = {
    music: false,
    sfx: true,
    mode: "light"
}

const settingsSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        toggleSfx(state) {
            state.sfx = !state.sfx
        },
        toggleMusic(state) {
            state.music = !state.music
        },
        toggleMode(state) {
            state.mode = state.mode === "light" ? "dark" : "light"
        }
    }
})

export const {
    toggleSfx,
    toggleMusic,
    toggleMode
  } = settingsSlice.actions
  
  export default settingsSlice.reducer