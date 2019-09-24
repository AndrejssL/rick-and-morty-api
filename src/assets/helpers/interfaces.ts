export interface EpisodeData {
    episodes: Episodes;
  }
  
  export interface Episodes {
    results: Episode[];
  }
  
  export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: Characters[];
  }
  
  export interface Characters {
    results: Character[];
  }
  
  export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    location: Location;
    origin: Location;
    episode: Episode[];
  }
  
  export interface ResponseVariable {
    page: number;
  }
  
  export interface LocationsData {
    locations: Locations;
  }
  
  export interface Locations {
    results: Location[];
  }
  
  export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
  }
  
  export interface MatchParams {
    id: string;
  }
  
  export interface CharacterData {
    character: Character;
  }
  
  export interface CharacterVariables {
    id: number;
  }
  export interface CharacterDataForAllCharacters {
    characters: Characters
  }