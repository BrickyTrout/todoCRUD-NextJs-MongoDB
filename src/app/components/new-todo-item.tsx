import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TodoItemType,
  TodoItemTypeWithouId,
} from "../definitions/todo-definition";
import { faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";

const NewTodoItem = (props: {
  addTodoItem: (newTodoItem: TodoItemTypeWithouId) => Promise<void>;
}) => {
  const [newTodoLabel, setNewTodoLabel] = useState("");
  const [showForm, setShowForm] = useState(false);
  function submitNewTodoItem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(newTodoLabel);
    const newTodoItem: TodoItemTypeWithouId = {
      label: newTodoLabel,
      done: false,
    };
    props.addTodoItem(newTodoItem);
  }

  function hideNewTodoItem(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div className={`${showForm ? "w-full" : ""}`}>
      <button
        className={`${
          showForm ? "hidden" : "block"
        } rounded-md text-slate-900 border-slate-900 border-2 pt-1 pb-1 pl-2 pr-2`}
        onClick={(e) => setShowForm(true)}
      >
        Add
        <FontAwesomeIcon icon={faPlus} className="ml-2"></FontAwesomeIcon>
      </button>
      <form
        onSubmit={(e) => {
          submitNewTodoItem(e);
        }}
        className={`${
          showForm ? "block" : "hidden"
        }  p-2 pl-4 pr-4 bg-slate-200 h-12 flex justify-items-center justify-between `}
      >
        <input
          type="text"
          name="label"
          value={newTodoLabel}
          onChange={(e) => setNewTodoLabel(e.target.value)}
        ></input>
        <div className="flex gap-4 p-1">
          <button type="submit">
            <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
          </button>
          <button onClick={(e) => hideNewTodoItem(e)}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodoItem;
