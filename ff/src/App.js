import { Route, Routes } from "react-router-dom";
import "../src/dist/styles.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import BikeExplore from "./components/BikeExplore";
import SignIn from "./components/Login";
import RegistrationPage from "./components/Register";
import { UserProvider } from "./components/UserContext";
import UserProfile from "./components/UserProfile";
import BikeBook from "./components/Vehicles";
import UserVehicles from "./components/UserVehicles";
import Booking from "./components/Booking";
import BookedVehicles from "./components/BookedVehicle";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <UserProvider>

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="models" element={<Models />} /> */}
        {/* <Route path="testimonials" element={<TestimonialsPage />} /> */}
        <Route path="register" element={<RegistrationPage />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/add" element={<BikeBook />} />
        <Route path="/get" element={<BikeExplore />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/vehicle" element={<UserVehicles />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/bookeduser" element={<BookedVehicles />} />
      </Routes>
      </UserProvider>
    </>
  );
}

export default App;
