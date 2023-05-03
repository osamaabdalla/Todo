import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    theme: {},
    darkMode: false,
    sorter: null,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        todosUpdate(state, action) {
            state.todos = action.payload;
        },
        changeAppTheme(state, action) {
            state.theme = action.payload;
        },
        toggleMode(state, action) {
            state.darkMode = action.payload;
        },
        updateSorter(state, action) {
            state.sorter = action.payload;
        }
    }
})

export const {
    todosUpdate,
    changeAppTheme,
    toggleMode,
    updateSorter
} = globalSlice.actions;

export default globalSlice.reducer;