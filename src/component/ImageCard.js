import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
export default function ImageCard({
  continent,
  country,
  selectedContinent,
  destination,
}) {
  return (
    <div>
      {continent && (
        <NavLink className="card-link" to={`/countries/${continent.id}`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={continent.image} />
            <Card.Body>
              <Card.Title>{continent.name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </NavLink>
      )}
      {country && (
        <NavLink
          className="card-link"
          to={`/${selectedContinent.id}/${country.id}`}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={country.image} />
            <Card.Body>
              <Card.Title>{country.name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </NavLink>
      )}
      {destination && (
        <NavLink className="card-link" to={`/detail/${destination.id}`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={destination.image} />
            <Card.Body>
              <Card.Title>{destination.name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </NavLink>
      )}
    </div>
  );
}
