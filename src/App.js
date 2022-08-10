import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
// components
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
      <Container fluid>
        <UserAuthContextProvider>
      <Routes>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </UserAuthContextProvider>
    </Container>

  );
}

export default App;