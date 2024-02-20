import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />} >
          <Route index element={<p>fff</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
