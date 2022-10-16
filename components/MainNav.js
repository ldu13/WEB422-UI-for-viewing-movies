import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

export default function MainNav() {
    return (
        <>
            <Navbar className="fixed-top navbar-dark bg-dark" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Lei Du</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" passHref><Nav.Link>Movies</Nav.Link></Link>
                            <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
 
        </>       
    );
}