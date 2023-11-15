import { useDispatch } from "react-redux"
import { deleteTodo, toggleDonetodo } from "../../store/slices/todosSlice"


export default function TodoItem({ todo }) {

  const dispatch = useDispatch()

  const deleteTodohandler = () => {
    dispatch(deleteTodo(todo.id))
  }

  const toggledone = () => {
    dispatch(toggleDonetodo({id : todo.id}));
  }

  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full ${todo.done ? 'line-through text-green-500' : 'text-gray-800'}`}>{todo.todo}</p>
      {
        todo.done
          ? <button onClick={toggledone} className="flex-no-shrink p-2 ml-4 mr-2 w-28 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">Not Done</button>
          : <button onClick={toggledone} className="flex-no-shrink p-2 border-2 border-green-500 rounded text-green-500 border-teal hover:text-white hover:bg-green-500">Done</button>
      }
      <button onClick={deleteTodohandler} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Remove</button>
    </div>
  )
}
