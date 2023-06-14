import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import HomePage from "./Pages/Home";
import IllustrationList from "./Pages/ListIllustrations";
import IllustrationDetails from "./Pages/IllustrationDetails";
import AddIllustration from "./Pages/AddIllustration";
import SignUpPage from "./Pages/Signup";
import LogInPage from "./Pages/Login";
import Profile from "./Pages/UserProfile";
import EditIllustration from "./Pages/EditIllustration";
import EditUser from "./Pages/EditUserProfile";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";

import IsPrivate from "./Components/IsPrivate";
import IsAnon from "./Components/IsAnon";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/illustration" element={<IsPrivate><IllustrationList/></IsPrivate>}/>
            <Route path="/illustration/:id" element={<IsPrivate><IllustrationDetails/></IsPrivate>}/>
            <Route path="/illustration/:id/edit" element={<IsPrivate><EditIllustration/></IsPrivate>}/>
            <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>} />
            <Route path="/login" element={<IsAnon><LogInPage/></IsAnon>}/>
            <Route path="/user-profile/:id" element={<IsPrivate><Profile/></IsPrivate>}/>
            <Route path="/user-profile/:id/edit" element={<IsPrivate><EditUser/></IsPrivate>}/>
            <Route path="/user-profile/:id/add-illustration/" element={<IsPrivate><AddIllustration/></IsPrivate>}/>
            <Route path="/cart" element={<IsPrivate><Cart/></IsPrivate>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
