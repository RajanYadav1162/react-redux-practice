import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="flex justify-center items-center h-96">
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
