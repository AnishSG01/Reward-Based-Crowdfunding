import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import "./App.css";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Landing from "./Components/Landing.js";
import SignIn from "./Components/SignIn.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.js";
import { toast, Toaster } from "react-hot-toast";
import UserState from "./context/User/UserState.js";
import CreateDonation from "./Components/CreateDonation.js";
import Donate from "./Components/Donate.js";
import Support from "./Components/Support.js";
import PageNotFound from "./Components/PageNotFound.js";
import Donatepg from "./Components/Donatepg.js";


function App() {
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
  />;

  let loggeduser = JSON.parse( sessionStorage.getItem('user'))

  return (
    <>
      <UserState>
        <div className="App">

          <Toaster
            toastOptions={{
              className: "",
              duration: 9000,
              style: {
                background: "#6674cc",
                color: "#fff",
              },

              success: {
                duration: 5000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <Navbar />
                   
          <Router>
            <Routes>
              {/* <Route exact path="/" element={<Donatepg />}></Route> */}

              <Route exact path="/" element={<Landing />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/signin" element={<SignIn />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/createDonation" element={loggeduser ? <CreateDonation /> : <PageNotFound/>}></Route>
              <Route exact path="/donate" element={loggeduser ? <Donate /> : <PageNotFound/>}></Route> 
              <Route exact path="/support" element={loggeduser ? <Support /> : <PageNotFound/>}></Route> 
            </Routes>
          </Router>

          <div className="float-div">
            <a href="/contact">
              {/* <i className="fa-solid fa-phone"></i> */}
              <img src="https://downloads.intercomcdn.com/i/o/299002/b731a3f930a9ad910c9ee7e9/1a269b2104beaaafeea6644490b1e6eb.png" alt="" />
            </a>
          </div>

          <Footer />
        </div>
      </UserState>
    </>
  );
}

export default App;
