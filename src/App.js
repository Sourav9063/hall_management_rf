import Home from "./pages/home/Home";
import { Routes, Route, HashRouter } from "react-router-dom";
import Application from "./pages/application/Application"
import './assets/css/global.css';
import Navbar from "./components/navbar/Navbar";
import Issue from "./pages/issue/Issue";
import LogIn from "./pages/login/LogIn"
import IssueList from "./pages/issueList/IssueList";

import { UserProvider } from "./utils/userContext";
import Footer from "./components/footer/Footer";




function App() {



  return (
    <>


      <UserProvider>

        <Navbar />
        <Routes>
          {/* public */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          {/* sign up page */}
          {/* private students*/}
          <Route path="application" element={<Application />} />
          <Route path="/issue" element={<Issue />} />
          {/* Payment page */}

          {/* private authority */}
          <Route path="/issue_list" element={<IssueList />} />
          {/* payment approve page */}
          {/* notice page */}
          {/* room details page and edit page */}


          {/* private department_head */}
          {/* application list for approve by dept head */}

        </Routes>
        <Footer />

      </UserProvider>
    </>
  );
}

export default App;
