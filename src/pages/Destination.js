import { useParams } from "react-router-dom";
import { data } from "../db/data";
import ImageCard from "../component/ImageCard";
export default function Destination() {
  const { continentId, countrytId } = useParams();
  console.log("params", continentId, countrytId);
  const continent = data.continents.find(
    ({ id }) => id === Number(continentId)
  );
  const country = continent.countries.find(
    ({ id }) => id === Number(countrytId)
  );
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
