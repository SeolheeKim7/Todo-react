import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
