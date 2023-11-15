import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    
    deleteTodo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload)
    },

    toggleDonetodo: (state , action) => {
      state.list = state.list.map(todo => {
        if(todo.id===action.payload.id) {
          return {
            ...todo,
            done : !todo.done
          }
        }
        return todo
      })
    }
  }
})

export const { addTodo, deleteTodo, toggleDonetodo } = todosSlice.actions;

export default todosSlice.reducer;