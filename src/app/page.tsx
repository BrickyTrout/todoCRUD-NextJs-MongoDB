import TodoList from "./components/todo-list/todo-list";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import TodoManager from "./components/todo-list/todo-manager";
config.autoAddCss = false;
export default function Home() {
  return <TodoManager></TodoManager>;
}
