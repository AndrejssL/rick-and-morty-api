import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import { FETCH_EPISODES } from "../assets/helpers/requests";
import { LoadingSpinner } from "../assets/helpers/Spinner";
import { EpisodeData, ResponseVariable } from "../assets/helpers/interfaces";

export const Episodes: React.FC = () => {
  const { loading, data, fetchMore } = useQuery<EpisodeData, ResponseVariable>(
    FETCH_EPISODES,
    { variables: { page: 1 } }
  );
  if (loading || !data || !data.episodes) {
    return (
      <div style={{ marginTop: "20%" }}>
        <LoadingSpinner />
      </div>
    );
  }
  const episodes = loading || !data ? [] : data.episodes.results;

  const scrollOnEnd = () =>
    fetchMore({
      variables: {
        page: episodes.length / 20 + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          episodes: {
            __typename: "Episodes",
            results: [
              ...prev.episodes.results,
              ...fetchMoreResult.episodes.results
            ]
          }
        };
      }
    });

  return (
    <div className="character-card-body">
      <div className="character-card-container">
        {episodes.map((it, i) => (
          <Col key={i}>
            <div className="character-card" key={i}>
              <div className="face face1">
                <div className="content">
                  <Link to={"/episodes/" + it.id}>
                    <button className="btn draw-border">
                      <p>{it.name}</p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="face face2">
                <button className="btn draw-border">
                  <h2> Learn More!</h2>
                </button>
              </div>
            </div>
            {i === episodes.length - 3 && (
              <Waypoint
                onEnter={() => {
                  scrollOnEnd();
                }}
              ></Waypoint>
            )}
          </Col>
        ))}
      </div>
    </div>
  );
};
