import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

import "./Movie.css";

import { useMovies } from "../../context/MoviesContext";

function Movie() {
  const { id } = useParams();
  const { movies, isLoading } = useMovies();

  const filteredMovie = movies.filter((movie) => movie.id === id);
  return (
    <Container className="App mt-2">
      {isLoading && (
        <Spinner animation="grow" variant="warning" className="spinner" />
      )}
      <Row xs={1} className="g-4">
        {filteredMovie.map((movie) => (
          <Col key={movie.id} className="text-center">
            <Card
              style={{ width: "22vw", margin: "0 auto" }}
              className="shadow relative"
            >
              <Card.Img
                className="px-4 pt-2"
                variant="top"
                src={movie.image}
                alt={movie.title}
              />
              <Card.Body>
                <Col className="title">
                  <Card.Title>{movie.title}</Card.Title>
                  {movie.imDbRating && (
                    <span className="rating bg-warning rounded-circle p-2 me-1">
                      {movie.imDbRating}
                    </span>
                  )}
                  <Card.Subtitle>
                    <span className="year bg-warning  py-2 rounded-end">
                      {movie.year}
                    </span>
                  </Card.Subtitle>
                </Col>

                <Card.Text className="crew text-center p-2">
                  {movie.crew.split(",").join(" ~ ")}
                </Card.Text>

                <Link to="/react-most-popular-movies/">
                  <div className="d-grid ">
                    <Button variant="primary">Go To Home Page</Button>
                  </div>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Movie;
