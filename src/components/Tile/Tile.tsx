import "./styles.css";

export function Tile(props: {
  name: string;
  isArticle: boolean;
  thumbnail: string;
}) {
  const { name, isArticle, thumbnail } = props;
  return (
    <li className="tile" role={isArticle ? "article" : "scour"}>
      <div
        className="tile__content"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <h3 className="tile__title">{name}</h3>
      </div>
    </li>
  );
}
