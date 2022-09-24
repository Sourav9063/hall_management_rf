import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "../src/Application"
import './assets/css/global.css';
import Navbar from "./components/Navbar";
import Issue from "./pages/issue/Issue";
import IssueList from "./pages/issueList/IssueList";
function App() {
  return (
    <>


      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="application" element={<Application />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/issue_list" element={<IssueList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
