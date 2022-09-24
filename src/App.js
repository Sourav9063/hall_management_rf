import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./pages/application/Application"
import './assets/css/global.css';
import Navbar from "./components/navbar/Navbar";
import Issue from "./pages/issue/Issue";
import LogIn from "./pages/login/LogIn"
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
          <Route path="login" element={<LogIn />} />
          <Route path="/issue_list" element={<IssueList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
