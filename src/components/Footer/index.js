import { Card, Spinner } from "react-bootstrap";

import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import {
  FaTwitterSquare,
  FaMedium,
  FaHackerrank,
  FaSpotify,
  FaYoutube,
  FaGithubSquare,
  FaCodepen,
} from "react-icons/fa";

import { useMovies } from "../../context/MoviesContext";

import "./Footer.css";

function Footer() {
  const { isLoading } = useMovies();

  return (
    <Card className="text-center">
      {isLoading && (
        <Spinner animation="grow" variant="warning" className="spinner" />
      )}
      <Card.Body>
        <a
          href="https://www.linkedin.com/in/mertkaanerdem"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size="30" />
        </a>
        <a
          href="https://github.com/mertkaanerdem"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare size="30" />
        </a>
        <a
          href="https://www.hackerrank.com/mertkaanerdem"
          target="_blank"
          rel="noreferrer"
        >
          <FaHackerrank size="30" />
        </a>
        <a
          href="https://mertkaanerdem.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaMedium size="30" />
        </a>
        <a
          href="https://codepen.io/mertkaanerdem"
          target="_blank"
          rel="noreferrer"
        >
          <FaCodepen size="30" />
        </a>
        <a
          href="https://www.instagram.com/mertkaanerdem"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram size="30" />
        </a>
        <a
          href="https://www.twitter.com/mertkaanerdem"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare size="30" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCUw2YmBMUyh45dKYZ11Taog"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size="30" />
        </a>
        <a
          href="https://open.spotify.com/artist/2NGfe9lWQSahIJaLKe5e8J?si=EM5LaPM3RZ-pF_ccM0UoLw"
          target="_blank"
          rel="noreferrer"
        >
          <FaSpotify size="30" />
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">M. Mertkaan Erdem</Card.Footer>
    </Card>
  );
}

export default Footer;
