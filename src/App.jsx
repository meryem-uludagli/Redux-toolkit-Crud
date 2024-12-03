import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/counter";
import Crud from "./pages/Crud";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Crud />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
