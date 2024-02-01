"use client";
import { TodoItemType } from "../../definitions/todo-definition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheck,
  faCheckCircle,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TodoItemPropType } from "./todo-item-prop-def";

const TodoItem = (props: TodoItemPropType) => {
  const { done, label, _id, setTodo, deleteTodo } = props;
  const todoItem = { done, label, _id };
  const [edit, setEdit] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  function checkboxHandler() {
    setTodo({ ...todoItem, done: done ? false : true });
  }
  function editHandler(save = true) {
    if (edit && save) {
      setTodo({ ...todoItem, label: newLabel });
    }
    setEdit((isEdit) => !isEdit);
  }
  function deleteHandler() {
    deleteTodo(_id);
  }
  return (
    <>
      <div
        className={`${
          edit && "hidden"
        } flex justify-items-center justify-between`}
      >
        <span className={`font-bold ${edit && "hidden"} leading-8`}>
          {label}
        </span>

        <div className="p-1 flex justify-items-center justify-between items-center h-full">
          <input
            type="checkbox"
            checked={done}
            onChange={checkboxHandler}
          ></input>
          <button className="ml-3" onClick={(e) => editHandler()}>
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </button>
          <button className="ml-3" onClick={(e) => deleteHandler()}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      <div
        className={`${
          !edit && "hidden"
        } flex justify-items-center justify-between items-center h-full`}
      >
        <input
          className={`font-bold`}
          type="text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        ></input>
        <div>
          <button className="ml-3" onClick={(e) => editHandler()}>
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
          </button>
          <button className="ml-3" onClick={(e) => editHandler(false)}>
            <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
