import './Home.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/userAuthContext";

import Navbar from "../../components/Navbar/Navbar"
import TaskManager from "../../components/TaskManager/TaskManager";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (

      <div>
      <Navbar/>
      <Row>
        <h1>Dashboard</h1>
        <TaskManager/>
      </Row>
        <Row>
          <Col>
            <div className="p-4 box mt-3 text-center">
              Hello Welcome <br />
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={handleLogout}>
                Log out
              </Button>
            </div>

          </Col>
        </Row>
      </div>
  
  );
};

export default Home;



