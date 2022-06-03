import { configureStore } from '@reduxjs/toolkit';
import {editorReducer, settingsReducer} from './features';

export default configureStore({
    reducer: {
        editor: editorReducer,
        settings: settingsReducer
    }
});