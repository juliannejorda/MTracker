import React from "react";
import { Button, Nav } from "react-bootstrap";
import history from "./history";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
// import { Navbar, Nav, } from "react-bootstrap";
import IntroTrending from "./IntroTrending";
import IntroTJ from "./IntroTJ";
import "./Intro.css";

function Intro() {
  //   const client = new ApolloClient({
  //     cache: new InMemoryCache(),
  //     uri: "https://graphql.anilist.co",
  //   });
  return (
    <div>
      {/* <button onClick={}></button> */}
      {/* <div
        class="title-line-wrapper"
        style="opacity: 1; transform: translate(0px, 0px);"
      >
        <div class="title-line" style="transform: translateX(-64px);"></div>
      </div> */}
      <div className="theHeader">
        <h1 className="theMainTitle">Welcome to MTracker</h1>
        <h5 className="theMainDesc">
          MTracker is a site that allows users' to search up and track any
          manga, manhwa or manhua information. MTracker also saves the users'
          reading status and chapter without an account!
        </h5>
        <br></br>
        {/* <Button variant="btn btn-success" onClick={() => history.push("/Info")}>
        Click button to search a manga
      </Button> */}
        {/* <Nav.Link href="/Info">Click to search a manga</Nav.Link> */}
        <Button size="lg" href="#/Info">
          Click To Search:
        </Button>
      </div>
      {/* <ApolloProvider client={client}> */}
      <h1>Top Trending:</h1>
      <IntroTrending />
      <h1>Julianne's Top Manhwa Trending:</h1>
      <p>Genres: Fantasy and Romance</p>
      <IntroTJ />
      {/* </ApolloProvider> */}
    </div>
  );
}

export default Intro;
