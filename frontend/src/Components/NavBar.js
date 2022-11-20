import Nav from 'react-bootstrap/Nav';


function NavBar() {
    return (
    <Nav variant="pills" defaultActiveKey="/home">
    <Nav.Item>
    <Nav.Link href="./Components/Pages/HomePage.js">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/games">Arcade</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="./Components/Pages/SignUpForm.js">Sign-Up</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="./Components/Pages/LoginForm.js">Log In</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="./Components/Pages/AboutUs.js">About Us</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="./Components/Pages/ContactUs.js">Contact Us</Nav.Link>
    </Nav.Item>
    </Nav>
    );
}
    
 export default NavBar;