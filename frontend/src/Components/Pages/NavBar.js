import Nav from 'react-bootstrap/Nav';

function NavBar() {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="./home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="./games">Arcade</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="./signup">Sign-Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="./login">Log In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="./about">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="./contact">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;