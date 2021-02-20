import { useContext, useState, useEffect } from "react";
import { MangaContext } from "../contexts/MangaContext";
import "./ReadingTitle.css";

const ReadingTitle = () => {
  const { mangas } = useContext(MangaContext);
  //   let theMangaLength = mangas.length;
  //   const [mangasLength, setMangasLength] = useState(0);
  //   useEffect(() => {
  //     //   effect
  //     //   return () => {
  //     //       cleanup
  //     //   }
  //     setMangasLength(mangas.length);
  //   });
  return (
    <>
      {/* {console.log(mangasLength)} */}
      {/* <p>Currently you have:</p> */}
      {console.log(mangas.length)}
      <h3 className="theOverallTitle">Your Reading List:</h3>
      <div className="readingTitleList">
        <>
          <div className="uppertrackList">Currently you have:⠀</div>
          <div className="theLength">
            <b>{mangas.length}</b>{" "}
          </div>
        </>
        <div className="trackList">⠀items on your list!</div>
      </div>
      {/* <div>Currently you have: {mangasLength} on your list</div> */}
      {/* <p>Currently you have {mangasLength} in your reading list.</p> */}
    </>
  );
};

export default ReadingTitle;
