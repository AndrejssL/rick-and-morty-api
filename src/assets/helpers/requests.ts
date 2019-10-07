import { gql } from "apollo-boost";

//Used on AllCharacters.tsx
export const FETCH_CHARACTERS = gql`
  query fetchCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        type
        image
        status
        gender
        location {
          id
          name
        }
        episode {
          id
          name
        }
        origin {
          id
          name
        }
      }
    }
  }
`;

// Used on Character.tsx
export const FETCH_CHARACTER = gql`
  query fetchCharacter($id: ID) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
      }
    }
  }
`;

// Used on Episodes.tsx
export const FETCH_EPISODES = gql`
  query fetchEpisodes($page: Int!) {
    episodes(page: $page) {
      results {
        id
        name
        air_date
        episode
        characters {
          name
        }
      }
    }
  }
`;

// Used on Planets.tsx
export const FETCH_LOCATIONS = gql`
  query fetchLocations($page: Int!) {
      locations(page: $page) {
        results {
          id
          name
          type
          dimension
        }
      }
  }
`;

export const FETCH_EP_CHARS = gql`
query fetchEpisode($id: ID) {
  episode(id: $id) {
    id
    name
    air_date
    episode
    characters {
      id
      name
      image
    }
  }
}
`;