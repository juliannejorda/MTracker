import React, { useContext, useState, Text } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MANGA_QUERY } from "../graphql/Queries";
import { MangaContext } from "../contexts/MangaContext";
import MangaInfo from "./mangaInfo";
import ReactHtmlParser from "react-html-parser";
import "./Home.css";
// import { Formik, Form, Field } from "formik";
import { InputGroup, Button, FormControl, Card } from "react-bootstrap";
import TagBubble from "./tagBubble";
import ReadMoreReact from "read-more-react";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLink, faFlag } from "@fortawesome/free-solid-svg-icons";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Router, Switch, Route } from "react-router-dom";
import Intro from "./Intro";
// import FormControl from "react-bootstrap/InputGroup";
// function selectOnlyThis(id) {
//   for (var i = 1; i <= 4; i++) {
//     document.getElementById("Check" + i).checked = false;
//   }
//   document.getElementById(id).checked = true;
// }
// function handleEntailmentRequest(e){
//     e.preventDefault();
//     //do something...
//     href=""

// }

const NewMangaForm = () => {
  const { dispatch } = useContext(MangaContext);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [chapter, setChapter] = useState(0);
  const [genres, setGenres] = useState([]);
  const [successfullyAdded, setSuccessfullyAdded] = useState(false);

  const [mangaSearched, setMangaSearched] = useState("");
  const [searchFieldValue, setSearchFieldValue] = useState("");

  const [getManga, { loading, data, error }] = useLazyQuery(GET_MANGA_QUERY, {
    variables: { search: mangaSearched },
  });
  function refreshPage() {
    window.location.reload(false);
  }

  if (error)
    return (
      <>
        <h1>Sorry not found</h1>
        {/* <Button href="#/Info">Return back</Button> */}
        <Button onClick={refreshPage}>Return back</Button>
      </>
    );
  if (data) {
    // console.log(data);
    console.log(loading);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, status);
    setGenres(data.Media.genres);
    // console.log(genres);
    console.log(data.Media.genres);
    if (data.Media.title.english == null) {
      //   setTitle(data.Media.synonyms[0]);
      if (data.Media.synonyms[0] != null) {
        // addManga(data.Media.synonyms[0], status, chapter, data.Media.genres);
        dispatch({
          type: "ADD_MANGA",
          manga: {
            title: data.Media.synonyms[0],
            status,
            chapter,
            genres: data.Media.genres,
            image: data.Media.coverImage.large,
          },
        });
      } else {
        dispatch({
          type: "ADD_MANGA",
          manga: {
            title: data.Media.title.romaji,
            status,
            chapter,
            genres: data.Media.genres,
            image: data.Media.coverImage.large,
          },
        });
        // addManga(data.Media.title.romaji, status, chapter, data.Media.genres);
      }
    } else {
      dispatch({
        type: "ADD_MANGA",
        manga: {
          title: data.Media.title.english,
          status,
          chapter,
          genres: data.Media.genres,
          image: data.Media.coverImage.large,
        },
      });
      //   addManga(data.Media.title.english, status, chapter, data.Media.genres);
      //   setTitle(data.Media.title.english);
    }

    setSuccessfullyAdded(true);

    // setTitle("");
    // setStatus("");
    // setChapter(0);
    // setGenres([]);
  };

  return (
    <div>
      {/* <form>
        <input
          type="text"
          value={title}
          placeholder="Manhwa name"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          value={status}
          placeholder="Status"
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <button onClick={handleSubmit} type="submit" value="Add Manhwa">
          Submit
        </button>
      </form> */}
      <h3 className="theOverallTitle">
        Enter the name of a{" "}
        <span className="threeMs">Manga, Manhwa, or Manhua:</span>
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMangaSearched(searchFieldValue);
          getManga();
          setSearchFieldValue("");
          console.log(genres);
          setSuccessfullyAdded(false);
        }}
      >
        {/* <input
          type="text"
          placeholder="Manhwa name..."
          value={searchFieldValue}
          // onChange={(event) => {

          //   setMangaSearched(event.target.value);
          // }}
          onChange={(e) => {
            setSearchFieldValue(e.target.value);
          }}
          // onClick={() => getManga()}

          // A SEPARATE FUNCTION CALLED ADD THIS COMPONENT
        ></input> */}
        <div className="mb-3">
          <InputGroup>
            <FormControl
              placeholder="Enter title"
              aria-label="Manga title"
              aria-describedby="basic-addon2"
              value={searchFieldValue}
              onChange={(e) => {
                setSearchFieldValue(e.target.value);
              }}
            />
            <InputGroup.Append>
              <Button
                //          type="button"
                //   id="btnsubmit"
                onClick={() => {
                  setMangaSearched(searchFieldValue);
                  getManga();
                  setSearchFieldValue("");
                  // console.log(genres);
                }}
                variant="outline-secondary"
              >
                Submit
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        {/* <Formik>
          <Field
            className="inputField"
            name="name"
            label="Enter Name"
            margin="normal"
            size="large"
            //   as={TextField}
            //   error={touched.name && errors.name}
            //   helperText={touched.name && errors.name}
          />
        </Formik> */}
        {/* <input type="button" value="Submit" id="btnsubmit" onclick="submitForm()"> </input> */}
        {/* <button
          type="button"
          id="btnsubmit"
          onClick={() => {
            setMangaSearched(searchFieldValue);
            getManga();
            setSearchFieldValue("");
            // console.log(genres);
          }}
        >
          Submit
        </button> */}
        {/* <button
          type="submit"
          id="btnsubmit"
          value="Add Manhwa"

          //   onClick={() => {
          //     setMangaSearched(searchFieldValue);
          //     getManga();
          //     setSearchFieldValue("");
          //     console.log(genres);
          //   }}
        >
          Submit
        </button> */}
      </form>

      <div className="manga">
        {data && (
          <>
            <div className="mangaTitles">
              <h1>
                {data.Media.title.english
                  ? data.Media.title.english
                  : data.Media.synonyms[0]
                  ? data.Media.synonyms[0]
                  : data.Media.title.romaji}
                {/* {console.log(data.Media)} */}
              </h1>
              <h3>{data.Media.title.native}</h3>
            </div>
            <div className="mangaBody">
              <div className="mangaCover">
                <img alt="cover" src={data.Media.coverImage.large}></img>
              </div>
              {/* <MangaInfo title={data.Media.title.english} /> */}
              <div className="mangaDescAndForm">
                <div className="mangaWord">
                  {/* <p>Description: {data.Media.description}</p> */}
                  {/* <text>{data.Media.description}</text> */}

                  <div className="description">
                    <h5>Description:</h5>
                    {ReactHtmlParser(data.Media.description)}{" "}
                  </div>

                  {/* <ReadMoreReact
                  text={ReactHtmlParser(data.Media.description)}
                  // min="80"
                  // ideal="100"
                  // max="200"
                  // readMoreText={readMoreText}
                /> */}

                  <div className="restInfo">
                    <div className="topInfo">
                      <div className="infoText">
                        {/* <h1>Average Score: {data.Media.averageScore}</h1> */}

                        <h1>
                          <span className="leTitle">Status: </span>
                          {data.Media.status}
                        </h1>
                        <h1>
                          <span className="leTitle">Genres: </span>
                          {data.Media.genres.join(", ")}
                        </h1>
                        {/* <h1>Country: {data.Media.countryOfOrigin}</h1> */}
                        <div className="theStars">
                          <StarRatings
                            rating={(data.Media.averageScore / 100) * 5}
                            starRatedColor="gold"
                            //   changeRating={this.changeRating}
                            numberOfStars={5}
                            name="rating"
                            starDimension={28}
                            starSpacing={1.5}
                            //   starHoverColor="red"
                          />
                        </div>
                        <div className="theIconButton">
                          <Button variant="light" className="popButton">
                            <FontAwesomeIcon size="lg" icon={faFlag} />
                            <div className="popTitle">
                              {data.Media.countryOfOrigin}
                            </div>
                          </Button>

                          {/* <h1>Popularity: {data.Media.popularity}</h1> */}

                          <Button variant="danger" className="popButton">
                            <FontAwesomeIcon size="lg" icon={faHeart} />
                            <div className="popTitle">
                              {data.Media.popularity}
                            </div>
                          </Button>
                        </div>
                        <div className="links">
                          {data.Media.externalLinks &&
                            data.Media.externalLinks
                              .slice(0, 3)
                              .map((link, index) => {
                                return (
                                  <div className="indLink">
                                    <a target="_blank" href={link.url}>
                                      {/* {index + 1} */}
                                      <FontAwesomeIcon
                                        size="lg"
                                        icon={faLink}
                                      />
                                    </a>
                                  </div>
                                );
                              })}
                        </div>
                      </div>
                      <div className="saveReading">
                        <form>
                          <div className="groupRead">
                            <input
                              type="radio"
                              name="choice"
                              value="Want to Read"
                              defaultChecked
                              onChange={() => setStatus("Want to Read")}
                            ></input>
                            <label htmlFor="Want to Read">Want to Read</label>
                          </div>
                          <br></br>
                          <div className="groupRead">
                            <input
                              type="radio"
                              name="choice"
                              value="Reading"
                              onChange={() => setStatus("Reading")}
                            ></input>
                            <label htmlFor="Reading">Reading</label>
                          </div>
                          <br></br>
                          <div className="groupRead">
                            <input
                              type="radio"
                              name="choice"
                              value="Finished Reading"
                              onChange={() => setStatus("Finished Reading")}
                            ></input>
                            <label htmlFor="Finished Reading">
                              Finished Reading
                            </label>
                          </div>
                        </form>
                        <div className="forChap">
                          <label for="chapter">Chapter:</label>
                          <input
                            type="number"
                            name="chapter"
                            min="0"
                            onChange={(e) => setChapter(e.target.value)}
                            required
                          ></input>
                        </div>
                        {successfullyAdded && (
                          <>
                            <p>Added Successfully</p>
                          </>
                        )}
                        {/* <button
                          onClick={handleSubmit}
                          type="submit"
                          value="Add Manhwa"
                        >
                          Submit
                        </button> */}
                        <Button
                          onClick={handleSubmit}
                          type="submit"
                          value="Add Manhwa"
                          block
                          variant="primary"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>

                    <br></br>
                    <div className="groupTags">
                      <h6 className="botTags">Tags:</h6>
                      <div className="bubblesTogether">
                        {data.Media.tags.slice(0, 5).map((tag) => {
                          return (
                            <div className="tagBubble">
                              {/* <p>{tag.name}</p> */}
                              <TagBubble name={tag.name} />
                              {/* <TagBubble name={tag.name}/> */}
                              {/* <TagBubble tagName={tag.name} /> */}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="groupTags">
                      <h6 className="botTags">Ranks:</h6>
                      <div className="bubblesTogether">
                        {data.Media.rankings.slice(0, 4).map((rank) => {
                          return (
                            <div className="tagBubble">
                              <TagBubble name={rank.context} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  {/* {console.log(
                  data.Media.tags.map((tag) => {
                    return <p>{tag.name}</p>;
                  })
                )} */}

                  {/* {data.Media.tags.map((tag) => {
                  <p>tag</p>;
                })} */}
                  {/* <h1>synonyms: {data.Media.synonyms[0]}</h1> */}
                </div>
              </div>
            </div>
            {/* <ReadMoreReact
              text="hello my name is julianne and does this work orka=fdgdkhfgk gskdhfgg dkghkd gkfdhg ghdfk gdhgk hdfkgdkughd rghk ueshg hdg hgkhfusdghd gfkContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obsure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.3(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Icomes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for tho
se interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
            /> */}
            {data.Media.bannerImage && (
              <div>
                <img
                  alt="banner"
                  className="bannerImg"
                  src={data.Media.bannerImage}
                ></img>
                {/* 
                <Card className="bg-dark text-white">
                  <Card.Img src={data.Media.bannerImage} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card> */}
              </div>
            )}

            {/* <div className="oneChar">
                      {/* {c.node.name.full} */}
            {/* {console.log(c)} */}

            {/* {data.Media.characters.edges[c].node.image.medium !=
                      "https://s4.anilist.co/file/anilistcdn/character/medium/default.jpg" ? ( */}
            {/* <img
                        alt="character img"
                        src={data.Media.characters.edges[c].node.image.large}
                      ></img>
                      {/* ) : (
                        <p>none</p>
                      )} */}
            {/* <span className="character">
                        {data.Media.characters.edges[c].node.name.full}
                      </span>
                    </div> */}

            {/* <Element name="scroll-container-second-element" style={{
              marginBottom: '200px'
            }}>
              second element inside container
          </Element> */}

            {data.Media.characters.edges[0] && (
              <div className="characterList">
                <h1 className="theCharTitle">Characters:</h1>
                {/* {console.log(data.Media.characters.edges)} */}
                {Object.keys(data.Media.characters.edges).map((c) => {
                  return (
                    <div className="oneChar">
                      <FlippingCard>
                        <FlippingCardBack>
                          {/* <br></br> */}
                          {data.Media.characters.edges[c].node.description ? (
                            <div>
                              <h4>
                                {data.Media.characters.edges[c].node.name.full}
                              </h4>
                              <Element
                                className="element"
                                id="scroll-container"
                                style={{
                                  position: "relative",
                                  height: "200px",
                                  overflow: "scroll",
                                  marginBottom: "100px",
                                }}
                              >
                                {/* <Element
                name="scroll-container-first-element"
                style={{
                  marginBottom: "200px",
                }}
              > */}
                                <ReadMoreReact
                                  id="charDesc"
                                  text={
                                    data.Media.characters.edges[c].node
                                      .description
                                  }
                                  //   text={ReactHtmlParser(
                                  //     data.Media.characters.edges[c].node
                                  //       .description
                                  //   )}
                                  ideal={200}
                                  readMoreText="Read More"
                                ></ReadMoreReact>
                              </Element>
                            </div>
                          ) : (
                            <h2 className="onlyCharName">
                              {data.Media.characters.edges[c].node.name.full}
                            </h2>
                          )}
                          {/* Content that will be displayed on the back of the card */}
                        </FlippingCardBack>
                        <FlippingCardFront>
                          <img
                            alt="character img"
                            src={
                              data.Media.characters.edges[c].node.image.large
                            }
                          ></img>
                        </FlippingCardFront>
                      </FlippingCard>
                    </div>
                  );
                })}
              </div>
            )}

            {/* <img
                        alt="rec title"
                        src={
                          data.Media.recommendations.edges[i].node
                            .mediaRecommendation.coverImage.large
                        }
                      ></img>
                      <span className="character">

                        {data.Media.recommendations.edges[i].node
                          .mediaRecommendation.title.english
                          ? data.Media.recommendations.edges[i].node
                              .mediaRecommendation.title.english
                          : data.Media.recommendations.edges[i].node
                              .mediaRecommendation.synonyms[0]
                          ? data.Media.recommendations.edges[i].node
                              .mediaRecommendation.synonyms[0]
                          : data.Media.recommendations.edges[i].node
                              .mediaRecommendation.title.romaji}
                      </span> */}

            {data.Media.recommendations.edges[0] && (
              <div className="recList">
                <h1 className="theCharTitle">Recommendations:</h1>
                {Object.keys(data.Media.recommendations.edges).map((i) => {
                  return (
                    <div className="oneChar">
                      <FlippingCard>
                        <FlippingCardBack>
                          {/* <h4>
                            {data.Media.recommendations.edges[i].node
                              .mediaRecommendation.title.english
                              ? data.Media.recommendations.edges[i].node
                                  .mediaRecommendation.title.english
                              : data.Media.recommendations.edges[i].node
                                  .mediaRecommendation.synonyms[0]
                              ? data.Media.recommendations.edges[i].node
                                  .mediaRecommendation.synonyms[0]
                              : data.Media.recommendations.edges[i].node
                                  .mediaRecommendation.title.romaji}
                          </h4> */}

                          <h2 className="onlyTitleName">
                            {data.Media.recommendations.edges[i].node
                              .mediaRecommendation.title.english
                              ? data.Media.recommendations.edges[i].node
                                  .mediaRecommendation.title.english
                              : data.Media.recommendations.edges[i].node
                                  .mediaRecommendation.synonyms[0]
                              ? data.Media.recommendations.edges[i].node
                                  .mediaRecommendation.synonyms[0]
                              : data.Media.recommendations.edges[i].node
                                  .mediaRecommendation.title.romaji}
                          </h2>
                          {/* <br></br> */}
                          {/* {
                            data.Media.recommendations.edges[i].node
                              .mediaRecommendation.averageScore
                          } */}

                          {/* Content that will be displayed on the back of the card */}
                        </FlippingCardBack>
                        <FlippingCardFront>
                          <img
                            alt="character img"
                            src={
                              data.Media.recommendations.edges[i].node
                                .mediaRecommendation.coverImage.large
                            }
                          ></img>
                        </FlippingCardFront>
                      </FlippingCard>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NewMangaForm;

// function Home() {
//   const [mangaSearched, setMangaSearched] = useState("");
//   const [searchFieldValue, setSearchFieldValue] = useState("");
//   const [getManga, { loading, data, error }] = useLazyQuery(GET_MANGA_QUERY, {
//     variables: { search: mangaSearched },
//   });
//   if (error) return <h1>Error found</h1>;
//   if (data) {
//     console.log(data);
//     console.log(loading);
//   }
//   return (
//     <div className="home">
//       <h1>Search for Manhwa</h1>
//       {/* <input
//         type="text"
//         placeholder="Manhwa name..."
//         onChange={(event) => {
//           setMangaSearched(event.target.value);
//         }}
//         // onClick={() => getManga()}
//       ></input> */}
//       {/* <input type="button" value="Submit" id="btnsubmit" onclick="submitForm()"> </input> */}
//       {/* <button type="button" id="btnsubmit" onClick={() => getManga()}>
//         Submit
//       </button> */}

//       <input
//         type="text"
//         placeholder="Manhwa name..."
//         value={searchFieldValue}
//         // onChange={(event) => {

//         //   setMangaSearched(event.target.value);
//         // }}
//         onChange={(e) => {
//           setSearchFieldValue(e.target.value);
//         }}
//         // onClick={() => getManga()}

//         // A SEPARATE FUNCTION CALLED ADD THIS COMPONENT
//       ></input>
//       {/* <input type="button" value="Submit" id="btnsubmit" onclick="submitForm()"> </input> */}
//       <button
//         type="button"
//         id="btnsubmit"
//         onClick={() => {
//           setMangaSearched(searchFieldValue);
//           getManga();
//           setSearchFieldValue("");
//         }}
//       >
//         Submit
//       </button>

//       <div className="manga">
//         {data && (
//           <>
//             <h1>{data.Media.title.english}</h1>
//             <h1>Average Score: {data.Media.averageScore}</h1>
//             <h1>Genres: {data.Media.genres.join(", ")}</h1>
//             <img alt="cover" src={data.Media.coverImage.large}></img>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
