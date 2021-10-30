import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useMovies } from "../../context/MoviesContext";
import { Link } from "react-router-dom";
import "./Movies.css";

function Movies() {
  const { movies, isLoading } = useMovies();

  return (
    <div class="divContainer">
    <Container className="App mt-2">
      {isLoading && (
        <Spinner animation="grow" variant="warning" className="spinner" />
        )}
      <Row xs={1} md={3} xl={4} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id} className="text-center">
            <Card
              style={{ margin: "0 auto" }}
              className="shadow relative carding"
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

                <Link to={`/${movie.id}`}>
                    <Button className="button" variant="primary">
                      Go To The Film's Page
                    </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
                  </div>
  );
}

export default Movies;
