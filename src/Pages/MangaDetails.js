import { useContext } from "react";
import { MangaContext } from "../contexts/MangaContext";
import useToggleState from "../hooks/useToggleState";
import EditMangaForm from "./editManga";
import "./MangaDetails.scss";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import { Button } from "react-bootstrap";

const MangaDetails = ({ manga }) => {
  const { dispatch } = useContext(MangaContext);
  const [isEditing, toggle] = useToggleState(false);

  if (isEditing) {
    return (
      <li style={{ overflowY: "hidden" }} onClick={() => toggle()}>
        {/* {console.log(manga.status)} */}
        <EditMangaForm
          id={manga.id}
          title={manga.title}
          stat={manga.status}
          task={manga.chapter}
          toggleEditForm={toggle}
        />
      </li>
    );
  }
  //   onClick={() => dispatch({ type: "REMOVE_MANGA", id: manga.id })}
  return (
    <div>
      <li className="listItem">
        <img alt={manga.image} src={manga.image}></img>
        <div className="theInfo">
          <div className="mDtitle">{manga.title}</div>
          <div className="MDinfo">
            <div>{manga.status}</div>
            <div>
              <i>Chapter:</i> {manga.chapter}
            </div>
            <i>Genres:</i> {manga.genres.join(", ")}
          </div>
          <div className="buttons">
            {/* <button
              className="button touch edit "
              onClick={() => dispatch({ type: "REMOVE_MANGA", id: manga.id })}
            > */}
            <Button
              variant="outline-secondary"
              onClick={() => dispatch({ type: "REMOVE_MANGA", id: manga.id })}
            >
              <FaTrash />
            </Button>
            {/* </button> */}
            {/* <div class="icon icon-expand">
              {" "}
              <i class="fa fa-bars"></i>
            </div> */}
            {/* <button
              className="button touch edit"
            
            > */}
            {/* {console.log(manga.status)} */}

            <Button
              variant="outline-info"
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
            >
              <FaRegEdit />
            </Button>
            {/* </button> */}
          </div>
        </div>
      </li>
    </div>
    // <li onClick={() => removeManga(manga.id)}>
    //   <div>{manga.title}</div>
    //   <div>{manga.status}</div>
    //   <div>Chapter: {manga.chapter}</div>
    //   <div>Genres: {manga.genres.join(", ")}</div>
    // </li>
  );
};

export default MangaDetails;
