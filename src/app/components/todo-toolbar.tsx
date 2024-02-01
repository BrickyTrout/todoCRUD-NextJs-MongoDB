import { Dispatch, SetStateAction } from "react";
import { TodoItemTypeWithouId } from "../definitions/todo-definition";
import NewTodoItem from "./new-todo-item";
import TodoSearchbar from "./todo-searchbar";

export interface TodoToolbarProps {
  addTodoItem: (newTodoItem: TodoItemTypeWithouId) => Promise<void>;
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
}

const TodoToolbar = (props: TodoToolbarProps) => {
  const { addTodoItem, setQueryString, queryString } = props;
  return (
    <div className="flex justify-between flex-wrap mb-2">
      <TodoSearchbar
        queryString={queryString}
        setQueryString={setQueryString}
      ></TodoSearchbar>
      <NewTodoItem addTodoItem={addTodoItem}></NewTodoItem>
    </div>
  );
};

export default TodoToolbar;
