import React, { useContext, useState } from "react";
import { MangaContext } from "../contexts/MangaContext";
import useInputState from "../hooks/useInputState";
// import useStyles from '../styles/EditTodoFormStyles.js';
// import { EDIT_TODO } from '../constants/actions';
import "./editManga.css";
import { Button } from "react-bootstrap";

function EditMangaForm({ id, title, stat, task, toggleEditForm }) {
  const { dispatch } = useContext(MangaContext);
  //   const [prevStatus, setPrevStatus] = useState(status);
  //   const yourStatus = status[Object.keys(status)[0]];
  const [currentStatus, setCurrentStatus] = useState(stat);
  //   const [searchFieldValue, setSearchFieldValue] = useState("");

  //   const classes = useStyles();
  //   const dispatch = useContext(DispatchContext);

  const [value, handleChange, clearValue] = useInputState(task);

  //   if (status === "Want to Read") {

  //   }

  return (
    <div className="currentReading">
      <form
        onClick={(e) => e.stopPropagation()}
        //   className={classes.EditTodoForm}
      >
        <div className="editTitle">{title}</div>
        {/* {setYourStatus(status[Object.keys(status)[0]])} */}
        {/* Your status: {status[Object.keys(status)[0]]} */}
        {/* {console.log(status)} */}
        {console.log(stat)}

        <div>
          <i className="editOptions">Change Status:</i>
        </div>
        {/* {console.log(task[Object.keys(task)[0]])} */}
        {/* {console.log(yourStatus)} */}
        {/* <p>{status}</p> */}
        <div className="wholeGroupRead">
          <div className="editgroupRead">
            <input
              type="radio"
              name="choice"
              value="Want to Read"
              checked={currentStatus === "Want to Read"}
              // checked={if (prevStatus) }
              // checked={() => {
              //   if (status === "Want to Read") {
              //     return true;
              //   }
              // }}
              onChange={() => setCurrentStatus("Want to Read")}
            ></input>
            <label htmlFor="Want to Read">Want to Read</label>
          </div>
          <br></br>
          <div className="editgroupRead">
            <input
              type="radio"
              name="choice"
              value="Reading"
              checked={currentStatus === "Reading"}
              // checked={() => {
              //   if (status === "Reading") {
              //     return true;
              //   }
              // }}
              onChange={() => setCurrentStatus("Reading")}
            ></input>
            <label htmlFor="Reading">Reading</label>
          </div>
          <br></br>
          <div className="editgroupRead">
            <input
              type="radio"
              name="choice"
              value="Finished Reading"
              checked={currentStatus === "Finished Reading"}
              // checked={() => {
              //   if (status === "Finished Reading") {
              //     return true;
              //   }
              // }}
              onChange={() => setCurrentStatus("Finished Reading")}
            ></input>
            <label htmlFor="Finished Reading">Finished Reading</label>
          </div>
        </div>
        <div className="forChap">
          <i className="editOptions">Change Chapter:</i>
          <input
            // autoFocus
            value={value}
            onChange={handleChange}
            placeholder="Chap"
            // onChange={(e) => {
            //     setSearchFieldValue(e.target.value);
            //   }}

            onClick={(e) => e.stopPropagation()}
            // className={classes.input}
          />
        </div>
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "EDIT_MANGA",
              id,
              chapter: value,
              status: currentStatus,
            });
            toggleEditForm();
            clearValue();
          }}
        >
          Submit
        </button> */}
        <Button
          block
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "EDIT_MANGA",
              id,
              chapter: value,
              status: currentStatus,
            });
            toggleEditForm();
            clearValue();
          }}
          variant="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default EditMangaForm;
