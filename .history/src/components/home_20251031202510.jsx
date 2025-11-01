import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'
const Home = () => {
  return (
    <>
      <header className='shadow'>
        <div className="bg-dark text-center py-3">
          <span className='text-white fw-bold'>
            Your Fashion Partner
          </span>
        </div>
        {/* navbar */}
        <div className="container">
          <Navbar expand="lg" className="">
            <Navbar.Brand href="#">
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Mens</Nav.Link>
                <Nav.Link href="#action2">Woman</Nav.Link>
                <Nav.Link href="#action2">Kids</Nav.Link>
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Navbar>
        </div>

      </header>
    </>
  )
}

export default Home