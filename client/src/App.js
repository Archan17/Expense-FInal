import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Aboutus from"./pages/Aboutus";
import Contactus from"./pages/Contactus";
import Blog from"./pages/Blog";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Aboutus" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
