import { useContext } from "react";
import { MangaContext } from "../contexts/MangaContext";
import MangaDetails from "./MangaDetails";
import "./MangaList.css";
import { Button } from "react-bootstrap";

const MangaList = () => {
  const { mangas } = useContext(MangaContext);
  return mangas.length ? (
    <div>
      {/* {console.log(mangas.reverse())} */}
      {/* {console.log(mangas.prototype.reverse())} */}
      <ul className="list">
        {mangas
          .slice(0)
          .reverse()
          .map((manga) => {
            return <MangaDetails manga={manga} key={manga.id} />;
          })}
      </ul>
    </div>
  ) : (
    <div className="noBooks">
      <h3>Add to your reading list here:</h3>
      <Button href="/#/Info">Click to search a manga</Button>
    </div>
  );
};

export default MangaList;
