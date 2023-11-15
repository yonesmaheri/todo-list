import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";


export default function TodosSection() {

  const store = useSelector(state => state.todos.list)

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <AddTodo />
        </div>
        <div>
          {
            store.map(todo => <TodoItem key={todo.id} todo={todo}/>)
          }
        </div>
      </div>
    </div>
  )
}