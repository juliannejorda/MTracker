import { v4 as uuidv4 } from "uuid";

export const mangaReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MANGA":
      return [
        ...state,
        {
          title: action.manga.title,
          status: action.manga.status,
          chapter: action.manga.chapter,
          genres: action.manga.genres,
          id: uuidv4(),
          image: action.manga.image,
        },
      ];
    case "REMOVE_MANGA":
      return state.filter((manga) => manga.id !== action.id);
    case "EDIT_MANGA":
      return state.map((manga) =>
        manga.id === action.id
          ? {
              ...manga,
              chapter: action.chapter,
              status: action.status,
            }
          : manga
      );
    default:
      return state;
  }
};
