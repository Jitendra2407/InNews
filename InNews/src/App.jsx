
import Footer from "./components/Footer";
import Header from "./components/header";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Error from "./pages/Error";
import TheHindu from "./pages/TheHindu";
import Notes from "./pages/Notes";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/the-hindu" element={<TheHindu />} />
          <Route path="/hindustan-times" element={<TheHindu/>}/>
          <Route path="/new-york-times" element={<TheHindu/>}/>
          <Route path="/notes" element={<Notes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;