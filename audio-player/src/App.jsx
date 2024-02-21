import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import PlayListPage from "./pages/PlayListPage/PlayListPage";
import AddMusicPage from "./pages/AddMusicPage/AddMusicPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/add_music" element={<AddMusicPage />} />
          <Route path="/playlist" element={<PlayListPage  />} />
          <Route path={"*"} element={<PageNotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
