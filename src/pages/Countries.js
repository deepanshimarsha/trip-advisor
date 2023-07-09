import { useParams } from "react-router-dom";
import { data } from "../db/data";
import ImageCard from "../component/ImageCard";
export default function Countries() {
  const { continentId } = useParams();

  const continent = data.continents.find(
    ({ id }) => id === Number(continentId)
  );
  const countries = continent.countries;
  return (
    <div>
      <h1>Top Countries in {continent.name} for your next holiday</h1>
      {countries.map((country) => {
        return <ImageCard country={country} selectedcontinent={continent} />;
      })}
    </div>
  );
}
