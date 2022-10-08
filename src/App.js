import Home from "./pages/home/Home";
import { Routes, Route, HashRouter } from "react-router-dom";
import Application from "./pages/application/Application"
import './assets/css/global.css';
import Navbar from "./components/navbar/Navbar";
import Issue from "./pages/issue/Issue";
import LogIn from "./pages/login/LogIn"
import IssueList from "./pages/issueList/IssueList";
import { useState } from "react";
import { UserContext } from "./utils/userContext";
import Footer from "./components/footer/Footer";




function App() {

  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <>


      <UserContext.Provider value={[user, setUser]}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="application" element={<Application />} />
            <Route path="/issue" element={<Issue />} />
            <Route path="login" element={<LogIn />} />
            <Route path="/issue_list" element={<IssueList />} />
          </Routes>
          <Footer />
        </HashRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
