import ImageCard from "../component/ImageCard";
import { data } from "../db/data";
export default function Home() {
  console.log(data);
  return (
    <div>
      <h1>Welcom to trip advisor</h1>
      <h2>Top continents for your next holiday</h2>
      <div>
        {data.continents.map((continent) => {
          return <ImageCard continent={continent} />;
        })}
      </div>
    </div>
  );
}
