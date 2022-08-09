import './Home.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/userAuthContext";

import TaskManager from '../../components/TaskManager';

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

      <Container fluid className="home">
      <Row>
        <h1>Daily Dash</h1>
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
      </Container>
  
  );
};

export default Home;



