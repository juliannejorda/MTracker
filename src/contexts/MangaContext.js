import React, { createContext, useState, useEffect, useReducer } from "react";
import { mangaReducer } from "../reducers/mangaReducer";
import { v4 as uuidv4 } from "uuid";

export const MangaContext = createContext();

const MangaContextProvider = (props) => {
  const [mangas, dispatch] = useReducer(mangaReducer, [], () => {
    const localData = localStorage.getItem("mangas");
    return localData ? JSON.parse(localData) : [];
  });

  // const [mangas, setMangas] = useState([
  //   // {
  //   //   title: "Who Made Me A Princess",
  //   //   status: "Finished",
  //   //   chapter: 4,
  //   //   genres: ["Romance", "Comedy"],
  //   //   id: 1,
  //   // },
  //   // {
  //   //   title: "Lady Baby",
  //   //   status: "Finished",
  //   //   genres: ["Fantasy", "Romance"],
  //   //   chapter: 10,
  //   //   id: 2,
  //   // },
  // ]);
  // const addManga = (title, status, chapter, genres) => {
  //   setMangas([...mangas, { title, status, chapter, genres, id: uuidv4() }]);
  // };
  // const removeManga = (id) => {
  //   setMangas(mangas.filter((manga) => manga.id !== id));
  // };
  useEffect(() => {
    localStorage.setItem("mangas", JSON.stringify(mangas));
    // set item whenever add it to the list
  }, [mangas]);
  return (
    // <MangaContext.Provider value={{ mangas, addManga, removeManga }}>
    //   {props.children}
    // </MangaContext.Provider>
    <MangaContext.Provider value={{ mangas, dispatch }}>
      {props.children}
    </MangaContext.Provider>
  );
};

export default MangaContextProvider;
