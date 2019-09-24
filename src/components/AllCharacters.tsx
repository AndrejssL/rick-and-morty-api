import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { FETCH_CHARACTERS } from "../assets/helpers/requests";
import { LoadingSpinner } from "../assets/helpers/Spinner";
import {
  CharacterDataForAllCharacters,
  ResponseVariable
} from "../assets//helpers/interfaces";

export const AllCharacters: React.FC = () => {
  const { loading, data, fetchMore } = useQuery<
    CharacterDataForAllCharacters,
    ResponseVariable
  >(FETCH_CHARACTERS, { variables: { page: 1 } });
  const characters = loading || !data ? [] : data.characters.results;
  const ScrollOnEnd = () => {
    if (characters.length < 20) return;
    fetchMore({
      variables: {
        page: characters.length / 20 + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          characters: {
            __typename: "Characters",
            results: [
              ...prev.characters.results,
              ...fetchMoreResult.characters.results
            ]
          }
        };
      }
    });
  };
  if (loading || !data || !data.characters.results) {
    return <LoadingSpinner />;
  }
  return (
    <div className="character-card-body">
      <div className="character-card-container">
        {characters.map((it, i) => (
          <Col key={i}>
            <div className="character-card" key={i}>
              <div className="face face1">
                <div className="content">
                <Link to={"/characters/" + it.id}>
                  <button className="btn draw-border">
                    Learn More!
                  </button>
                  </Link>
                </div>
              </div>
              <div className="face face2">
                <h2>{it.name}</h2>
                <img src={it.image} alt="Image of character"></img>
              </div>
            </div>
            {i === characters.length - 5 && <Waypoint onEnter={ScrollOnEnd} />}
          </Col>
        ))}
      </div>
    </div>
  );
};
