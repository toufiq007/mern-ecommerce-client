import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <>
      {/* every common components that should be present every pages */}
      {/* <h1>header components</h1> */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {/* here doesn't give /login or /register only give login and register to the path property */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
