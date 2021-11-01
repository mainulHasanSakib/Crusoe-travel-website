import React from 'react';
import { Container, Nav, Navbar ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
   const { user, logOut } = useAuth();
    return (
        <>
<Navbar bg="info" variant="dark" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand expand="lg" href="#home" >Crusoe Survival & Camping</Navbar.Brand >
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav className="ms-auto">
      <Nav.Link as={ HashLink } to="/home#home">Home </Nav.Link>
      <Nav.Link as={ HashLink } to="/home#about">About </Nav.Link>
      <Nav.Link as={ HashLink } to="/home#challenges">Challenges </Nav.Link>
      {user?.email  && <Nav.Link as={Link} to="/addchallenge">Add Challenge</Nav.Link>   } 
      {user?.email  && <Nav.Link as={Link} to="/manage">Manage Surviver</Nav.Link>   } 
      {user?.email ?
                            
                            <Button onClick={logOut} variant="light">Logout</Button>  :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            
                                     
                            
                        <Navbar.Text>
                            Hello: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
      
    </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};

export default Header;