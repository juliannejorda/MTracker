import { useContext } from "react";
import { MangaContext } from "../contexts/MangaContext";
import MangaDetails from "./MangaDetails";
import "./MangaList.css";
import { Button } from "react-bootstrap";
import ReadingGraph from "./ReadingGraph";

const MangaList = () => {
  const { mangas } = useContext(MangaContext);
  let readingStats = mangas.map((a) => a.status);
  let wantToRead = readingStats.filter(
    (stat) => stat.normalize() === "Want to Read"
  );
  let isReading = readingStats.filter((stat) => stat.normalize() === "Reading");
  let finishedReading = readingStats.filter(
    (stat) => stat.normalize() === "Finished Reading"
  );
  var numsWIF = [wantToRead.length, isReading.length, finishedReading.length];
  return mangas.length ? (
    <div>
      {/* {console.log(mangas.reverse())} */}
      {/* {console.log(mangas.prototype.reverse())} */}
      <ReadingGraph
        className="theGraph"
        wantToRead={wantToRead.length}
        isReading={isReading.length}
        finishedReading={finishedReading.length}
        info={numsWIF}
      />
      <ul className="list">
        {console.log(mangas)}
        {console.log(readingStats)}
        {console.log(isReading)}
        {console.log(finishedReading)}
        {console.log(wantToRead)}
        {/* turn the name + genre info an array???? */}

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
      <Button href="#/Info">Click to search a manga</Button>
    </div>
  );
};

export default MangaList;
