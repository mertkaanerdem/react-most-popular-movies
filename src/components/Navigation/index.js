import { Navbar, Container } from "react-bootstrap";
import Logo from "../../assets/mertkaanerdem.jpg";
function Nav() {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-sm-top">
      <Container>
        <Navbar.Brand
          href="/react-most-popular-movies/"
          className="text-warning m-auto"
        >
          <img
            alt=""
            src={Logo}
            width="33"
            height="33"
            className="d-inline-block align-top me-2"
          />
          ReactMostPopularMovies
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
