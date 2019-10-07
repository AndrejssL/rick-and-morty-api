import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { EpisodeCard } from "./EpisodeCard";
import {
  MatchParams,
  EpResponse,
  SingleResponseVars
} from "../assets/helpers/interfaces";
import { FETCH_EP_CHARS } from "../assets/helpers/requests";

export const SingleEpisode: React.FC<RouteComponentProps<MatchParams>> = ({
  match
}) => {
  const { loading, data } = useQuery<EpResponse, SingleResponseVars>(
    FETCH_EP_CHARS,
    { variables: { id: parseInt(match.params.id) } }
  );
  if (loading || !data || !data.episode) {
    return <div className="loader">Loading...</div>;
  }
  const episode = data.episode;
  const characters = episode.characters;

  return (
    <div>
      <EpisodeCard className="episode-info" props={episode}/>
      <div className="character-card-body" style={{marginTop: '20px'}}>
      <div className="character-card-container">
        {characters.map((item: any, index: number) => (
          <Link
            to={"/characters/" + item.id}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <div className="character-card" key={index}>
              <div className="face face1">
                <div className="content">
                  <Link to={"/characters/" + item.id}>
                    <button className="btn draw-border">Learn More!</button>
                  </Link>
                </div>
              </div>
              <div className="face face2">
                <h2>{item.name}</h2>
                <img src={item.image} alt="Image of character"></img>
              </div>
            </div>{" "}
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};
