import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

const NavBar = () => {
  return (
    <div className="navbar">
      <Container>
        <Link to="/">
          <h5>React Query CRUD</h5>
        </Link>

        <Link to="/create-book">Create A Book</Link>
      </Container>
    </div>
  );
};

export default NavBar;
