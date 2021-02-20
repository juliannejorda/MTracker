import { gql } from "@apollo/client";

export const GET_MANGA_QUERY = gql`
  query Media($search: String!) {
    Media(search: $search, isAdult: false, type: MANGA) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
        medium
      }
      chapters
      description
      status
      countryOfOrigin
      popularity
      rankings {
        context
      }
      tags {
        name
      }
      externalLinks {
        url
      }
      characters(page: 1, perPage: 5) {
        edges {
          node {
            id
            description
            siteUrl
            name {
              first
              last
              full
              native
            }
            image {
              large
              medium
            }
          }
        }
      }
      recommendations(page: 1, perPage: 5) {
        edges {
          node {
            id
            mediaRecommendation {
              id
              averageScore
              genres
              synonyms
              title {
                romaji
                english
                native
                userPreferred
              }
              coverImage {
                extraLarge
                large
                medium
                color
              }
            }
            rating
          }
        }
      }
      bannerImage
      averageScore
      genres
      synonyms
    }
  }
`;
