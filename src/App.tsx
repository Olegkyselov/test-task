import { Tile } from "./components/Tile";

const tiles = [
  {
    name: "Campus Scour",
    isArticle: false,
    thumbnail: "/images/stadium.jpg",
  },
  {
    name: "All About Madison",
    isArticle: true,
    thumbnail: "/images/city-night.jpg",
  },
  {
    name: "Madison's History",
    isArticle: true,
    thumbnail: "/images/city-sun.jpg",
  },
  {
    name: "Downtown Scour",
    isArticle: false,
    thumbnail: "/images/city-street.jpg",
  },
];

function App() {
  return (
    <ul className="tiles">
      {tiles.map((tile) => (
        <Tile {...tile} key={tile.name} />
      ))}
    </ul>
  );
}

export default App;
