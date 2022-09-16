import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Search from "./Search/Search";
import Cards from "./Cards/Cards";
import UserCard from "./UserCard/UserCard";
import FollowerCard from "./FollowerCard/FollowerCard";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  const handleData = async (name) => {
    const res = await fetch(`https://api.github.com/users/${name}`);
    const data = await res.json(res);
    setUser(data);
  };

  return (
    <div className="mt-5">
      <Container>
        <Search handleData={handleData} />
        <Cards user={user} />
        <Row>
          <Col md={6}>
            <UserCard user={user} />
          </Col>
          <Col md={6}>
            <FollowerCard
              user={user}
              setUser={setUser}
              handleData={handleData}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
