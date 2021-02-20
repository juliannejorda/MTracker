import React, { Component } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MANGA_QUERY } from "../graphql/QueriesTrending";
import axios from "axios";
import {
  FlippingCard,
  FlippingCardBack,
  FlippingCardFront,
} from "react-ui-cards";
import { Card, Icon, Image } from "semantic-ui-react";

import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import "./IntroTrending.css";

// function IntroTrending() {
//   return <div></div>;
// }

const GridItem = (props) => (
  <>
    {/* <FlippingCard>
      <FlippingCardBack>
        <h1>{props.title}</h1>
      </FlippingCardBack>
      <FlippingCardFront>
        <img className="grid__img" src={props.image} alt="manga name" />
      </FlippingCardFront>
    </FlippingCard> */}
    <div className="theCard">
      <Card className="card">
        <a rel="https://anilist.co/" target="_blank" href={props.url}>
          <Image src={props.image} wrapped ui={false} />
        </a>
        <Card.Content>
          <Card.Header className="title">{props.title}</Card.Header>
          <Card.Meta>
            {/* <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={(props.score / 100) * 5}
            readonly
          /> */}

            <StarRatings
              rating={(props.score / 100) * 5}
              starRatedColor="gold"
              //   changeRating={this.changeRating}
              numberOfStars={5}
              name="rating"
              starDimension={20}
              starSpacing={3}
              //   starHoverColor="red"
            />
            {/* <p>{props.score}</p> */}
            <p className="listingGenre">{props.genre.join(", ")}</p>
          </Card.Meta>
        </Card.Content>
      </Card>
    </div>
    {/* <div className="grid__flex"></div> */}
  </>
);

class IntroTJ extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  getAnime = async (query, variables) => {
    try {
      const response = await axios.post("https://graphql.anilist.co", {
        query,
        variables,
      });

      // Log the response so we can look at it in the console
      console.log(response.data);

      // Set the data to the state
      this.setState(() => ({
        isLoaded: true,
        items: response.data.data.Page.media,
      }));
    } catch (error) {
      // If there's an error, set the error to the state
      this.setState(() => ({ error }));
    }
  };

  componentDidMount() {
    // This is the GraphQL query
    // TRENDING_DESC, POPULARITY_DESC
    // countryOfOrigin: KR
    const query = `
    query {
      Page(perPage: 15) {
        media(isAdult: false, sort: POPULARITY_DESC, type: MANGA, countryOfOrigin: KR, genre_in: ["Fantasy", "Romance"], genre_not_in: ["Psychological", "Ecchi", "Yaoi", "Yuri", "Adventure"]) {
          id
          title {
            romaji
            english
          }
          siteUrl
          meanScore
          genres
          coverImage {
            large
          }
        }
      }
    }
    `;

    // These variables are optional, leave empty for now
    const variables = {};

    // We call the method here to execute our async function
    this.getAnime(query, variables);
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="grid">
          {items.map((item) => (
            <GridItem
              key={item.id}
              title={
                item.title.english ? item.title.english : item.title.romaji
              }
              image={item.coverImage.large}
              score={item.meanScore}
              genre={item.genres}
              url={item.siteUrl}
            />
          ))}
        </div>
      );
    }
  }
}

export default IntroTJ;
