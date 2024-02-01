import { TodoItemType } from "@/app/definitions/todo-definition";

export interface TodoItemManangerProp extends TodoItemType {
  setTodo: (todo: TodoItemType) => void;
  todoDeleted: () => void;
}

export interface TodoItemPropType extends TodoItemType {
  setTodo: (todo: TodoItemType) => void;
  deleteTodo: (todoId: number) => void;
}
