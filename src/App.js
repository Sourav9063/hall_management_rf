import { Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Application from "./pages/application/Application";
import Home from "./pages/home/Home";
import Issue from "./pages/issue/Issue";
import IssueList from "./pages/issueList/IssueList";
import LogIn from "./pages/login/LogIn";
import StudentReg from "./pages/registration/student";
import { UserProvider } from "./utils/userContext";
import Navbar from "./components/navbar/Navbar"
import ProvostReg from "./pages/registration/provost/provost";
import AdministrationReg from "./pages/registration/administrationReg/administrationReg";
import DeptHead from "./pages/registration/dept_head/deptHead";
import Footer from "./components/footer/Footer"
import AppliList from "./pages/application_list/appliList";
import RoomAssign from "./pages/assign_room/RoomAssign";
import Resident from "./pages/resident/resident";
import Room from "./pages/room/Room"
import Payment from "./pages/payment/payment";
import Approval from "./pages/approval/approval";
import Cancelled from "./pages/cancelled/Cancelled";
import Approved from "./pages/approved/Approved";
import CreateNote from "./pages/notes/CreateNote";

function App() {
  return ( 
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          
          {/* public */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="application-list" element={<AppliList />} />

          {/* sign up page */}
          <Route path="registration" element={<StudentReg />} />
          <Route path="provostReg" element={<ProvostReg />} />
          <Route path="administrationReg" element={<AdministrationReg />} />
          <Route path="dept_headReg" element={<DeptHead />} />
          {/* private students*/}
          <Route path="application" element={<Application />} />
          <Route path="/issue" element={<Issue />} />
          {/* Payment page */}
          <Route path="payment" element={<Payment />} />

          {/* private authority */}
          <Route path="/issue_list" element={<IssueList />} />
          {/* payment approve page */}
          {/* notice page */}
          {/* room details page and edit page */}
          <Route exact path="room-assign" component={AppliList} element={<RoomAssign />} />
          <Route path="resident" element={<Resident />} />
          <Route path="room" element={<Room />} />


          {/* private department_head */}
          <Route path="for-approval" element={<Approval />} />
          <Route path="cancelled" element={<Cancelled />} />
          

          {/* application list for approve by dept head */}
          <Route path="approved" element={<Approved/>} />

          {/*page about expenses notes and others*/}
          <Route path="/pending/create-note" element={<CreateNote/>} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
