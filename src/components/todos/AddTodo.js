import { useState } from "react"
import { addTodo } from "../../store/slices/todosSlice";
import { useDispatch } from "react-redux";

export default function AddTodo() {

  const dispatch = useDispatch()

  const [todo, setTodo] = useState("");
  const inputHandle = (e) => setTodo(e.target.value)

  const submitHandle = () => {
    if (todo.length > 0) {
      dispatch(addTodo({ id: new Date().getTime(), todo: todo, done: false }))
      setTodo("");
    }
  }

  return (
    <div className="flex mt-4">
      <input onChange={inputHandle} value={todo} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
      <button onClick={submitHandle} className="flex-no-shrink p-2 border-2 border-green-500 rounded text-green-500 border-teal hover:text-white hover:bg-green-500">Add</button>
    </div>
  )
}
