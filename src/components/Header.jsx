import React, { useContext } from 'react';
import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';
import storage from '../context/context';

function Header() {
  const {
    companiesNames, setCompanyFilter, setDateFilter, setAlphabeticFilter,
  } = useContext(storage);

  const changeCompanyFilter = ({ target }) => {
    setCompanyFilter(target.innerText);
  };

  const changeDateFilter = ({ target }) => {
    setDateFilter(target.innerText);
  };

  const changeAlphabeticFilter = ({ target }) => {
    setAlphabeticFilter(target.innerText);
  };

  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Zippia</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Company Name"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  onClick={(e) => changeCompanyFilter(e)}
                >
                  Show All
                </NavDropdown.Item>
                {companiesNames.map((company) => (
                  <NavDropdown.Item
                    onClick={(e) => changeCompanyFilter(e)}
                  >
                    {company}

                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Filter by date"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  onClick={(e) => changeDateFilter(e)}
                >
                  Last 7 days

                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) => changeDateFilter(e)}
                >
                  All Time

                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Alphabetic Order"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  onClick={(e) => changeAlphabeticFilter(e)}
                >
                  Ascending

                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={(e) => changeAlphabeticFilter(e)}
                >
                  Descending

                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
