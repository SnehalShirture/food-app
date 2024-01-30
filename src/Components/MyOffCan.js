import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'

const MyOffCan = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar>

                <FaBars className='nav-ic' onClick={handleShow} size={20} color='cyan' />
                <Navbar.Brand >Foodiieess</Navbar.Brand>

            </Navbar>
            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='flex-column'>
                        <Nav.Link>
                            Home
                        </Nav.Link>
                        <Nav.Link>
                            Home
                        </Nav.Link>
                        <Nav.Link>
                            Home
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MyOffCan