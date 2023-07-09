import { useParams } from "react-router-dom";
import { data } from "../db/data";
import ImageCard from "../component/ImageCard";
export default function Destination() {
  const { countryId, continentId } = useParams();

  const continent = data.continents.find(({ id }) => id === continentId);
  const country = continent.countries.find(({ id }) => id === countryId);
  const destinations = country.destinations;
  return (
    <div>
      <h1>Top Countries in {country.name} for your next holiday</h1>
      {destinations.map((destination) => {
        return <ImageCard destination={destination} />;
      })}
    </div>
  );
}
