import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { NavigationStyle } from "../stylesComponents/NavegationStyle";

export const Navegation = () => {
  return (
    <NavigationStyle>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle
            className="toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link className="linkBase" to={"/"}>
                Dental clinic
              </Link>
              <Link className="link" to={"/dentist"}>
                Dentists
              </Link>
              <Link className="link" to={"/patient"}>
                Patients
              </Link>
              <Link className="link" to={"/shift"}>
                Shifts
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavigationStyle>
  );
};
