import React from "react";
import "./Cards.css";
import { GoRepo } from "react-icons/go";
import { FaUsers, FaUserPlus, FaUnsplash } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const Cards = ({ followers, user, setUser }) => {
  return (
    <section className="card-section mt-3 md-3">
      <Row className="g-3">
        <Col>
          <div className="cards">
            <GoRepo />

            <h3>{user.public_repos}</h3>
            <p>Repos</p>
          </div>
        </Col>
        <Col>
          <div className="cards">
            <FaUsers />
            <h3>{user.followers}</h3>
            <p>Followers</p>
          </div>
        </Col>
        <Col>
          <div className="cards">
            <FaUserPlus />
            <h3>{user.following}</h3>
            <p>Following</p>
          </div>
        </Col>
        <Col>
          <div className="cards">
            <FaUnsplash />
            <h3>{user.public_gists}</h3>
            <p>Gists</p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Cards;
