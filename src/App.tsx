import React from "react";
import { Navbar } from "./components/Navbar";
import { TodosPage as TodoPage } from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoPage />
      </div>
    </>
  );
};

export default App;
